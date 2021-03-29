<?php

namespace App\Http\Controllers;

use App\Models\GeometricPatterns;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GeometricPatternsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
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

        $item = GeometricPatterns::findOrFail($id);
        if ($item)
        {
            // image
            if ( $request->input('data')['image'] ){
                Storage::disk('public')->delete($item->image);
            }

            // name
            if ( $item->update(['name' => $request->input('data')['name']]) )
            {
                return response(
                    $item
                );
            } else{
                return response('error')->setStatusCode(500);
            }
        } else{
            return response('error')->setStatusCode(500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GeometricPatterns  $geometricPatterns
     * @return \Illuminate\Http\Response
     */
    public function destroy(GeometricPatterns $geometricPatterns)
    {
        //
    }
}
