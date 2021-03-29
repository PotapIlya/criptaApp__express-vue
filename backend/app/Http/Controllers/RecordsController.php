<?php

namespace App\Http\Controllers;

use App\Models\Records;
use Illuminate\Http\Request;

class RecordsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
//            Records::take(5)->get()
            Records::paginate(10)
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

        $newPath = $request->image->store('records', 'public');


        $create = Records::create([
            'currency_pairs_id' => $request->input('currencyPairs'),
            'geometric_patterns_id' => $request->input('geometric_patterns_id'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'image' => $newPath,
            'price_start' => $request->input('price_start'),
            'price_end' => $request->input('price_end'),
            'count' => $request->input('count'),
            'profit' => $request->input('profit'),
            'side' => (boolean) $request->input('side'),
        ]);
        if ( $create )
        {
            return response($create);
        } else{
            return response('error')->setStatusCode(500);
        }
    }


    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        return response(
            Records::findOrFail($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Records  $records
     * @return \Illuminate\Http\Response
     */
    public function edit(Records $records)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Records  $records
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Records $records)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Records  $records
     * @return \Illuminate\Http\Response
     */
    public function destroy(Records $records)
    {
        //
    }
}
