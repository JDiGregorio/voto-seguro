<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('centro_movilizador', function (Blueprint $table) {
            $table->unsignedBigInteger('movilizador_id');
            $table->unsignedBigInteger('centro_id');

            $table->primary(['movilizador_id', 'centro_id']);

            $table->foreign('movilizador_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('centro_id')->references('id')->on('centros')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('centro_movilizador', function (Blueprint $table) {
            $table->dropForeign(['movilizador_id']);
            $table->dropForeign(['centro_id']);
        });

        Schema::dropIfExists('centro_movilizador');
    }
};
