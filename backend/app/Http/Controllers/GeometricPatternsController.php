<?php

namespace App\Http\Controllers;

use App\Models\GeometricPatterns;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use function GuzzleHttp\Psr7\uri_for;

class GeometricPatternsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // select * from 'geometricPatterns'
        //http://127.0.0.1:8000/api/currencyPairs
        return response(
            GeometricPatterns::all()
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ( $request->input('update') )
        {
            return $this->updatePattern( $request->all() );
        }
        else
        {
            $newPath = $request->image->store('geometricPatterns', 'public');
            $create = GeometricPatterns::create([
                'name' => $request->input('name'),
                'image' => $newPath,
            ]);
            if ( $create )
            {
                return response($create);
            } else{
                return response('error')->setStatusCode(500);
            }
        }
    }
    private function updatePattern(array $data)
    {
        $item = GeometricPatterns::findOrFail($data['id']);
        if ($item)
        {
            // image
            if ( $data['image'] !== 'null' ){
                Storage::disk('public')->delete($item->image);

                $newPath = $data['image']->store('geometricPatterns', 'public');
                if ( !$item->update(['image' => $newPath]) )
                {
                    return response('error')->setStatusCode(500);
                }
            }

            // name
            if ( $item->update(['name' => $data['name']]) )
            {
                return response( $item );
            } else{
                return response('error')->setStatusCode(500);
            }
        } else{
            return response('error')->setStatusCode(500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GeometricPatterns  $geometricPatterns
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return response(
            GeometricPatterns::findOrFail($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GeometricPatterns  $geometricPatterns
     * @return \Illuminate\Http\Response
     */
    public function edit(GeometricPatterns $geometricPatterns)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GeometricPatterns  $geometricPatterns
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        return response(
            $request->all()
        );

//        $item = GeometricPatterns::findOrFail($id);
//        if ($item)
//        {
//            // image
//            if ( $request->input('data')['image'] ){
//                Storage::disk('public')->delete($item->image);
//            }
//
//            // name
//            if ( $item->update(['name' => $request->input('data')['name']]) )
//            {
//                return response(
//                    $item
//                );
//            } else{
//                return response('error')->setStatusCode(500);
//            }
//        } else{
//            return response('error')->setStatusCode(500);
//        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GeometricPatterns  $geometricPatterns
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if ( GeometricPatterns::destroy($id) ){
            return response(['success' => $id]);
        } else{
            return response('error')->setStatusCode(500);
        }
    }
}
