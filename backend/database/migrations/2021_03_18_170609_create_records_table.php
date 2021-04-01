<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('currency_pairs_id');
            $table->unsignedBigInteger('geometric_patterns_id');

            $table->string('title', 255)->default(null)->nullable();
            $table->text('description')->default(null)->nullable();
            $table->text('image')->default(null)->nullable();

            $table->string('price_start')->default(0);
            $table->string('price_end')->default(0);


            $table->string('count', 10)->default(0);
            $table->string('profit', 10)->default(0);
            $table->boolean('side')->default(0);

            $table->string('day', 5)->default(0);
            $table->string('month', 5)->default(0);
            $table->string('year', 5)->default(0);

            $table->foreign('currency_pairs_id')->references('id')->on('currency_pairs');
            $table->foreign('geometric_patterns_id')->references('id')->on('geometric_patterns');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
}
