<?php

namespace App\Http\Controllers;

use App\Models\CurrencyPair;
use Illuminate\Http\Request;

class CurrencyPairController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(
            CurrencyPair::all()
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
        $create = CurrencyPair::create([
            'name' => $request->input('data')
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
     * @param  \App\Models\CurrencyPair  $currencyPair
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return response(
            CurrencyPair::findOrFail($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CurrencyPair  $currencyPair
     * @return \Illuminate\Http\Response
     */
    public function edit(CurrencyPair $currencyPair)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CurrencyPair  $currencyPair
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $item = CurrencyPair::findOrFail($id);
        if ($item)
        {
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
     * @param  \App\Models\CurrencyPair  $currencyPair
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        if ( CurrencyPair::destroy($id) ){
            return response(['success' => $id]);
        } else{
            return response('error')->setStatusCode(500);
        }
    }
}
