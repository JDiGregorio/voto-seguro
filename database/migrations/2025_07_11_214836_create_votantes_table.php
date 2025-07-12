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
        Schema::create('votantes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('dni')->unique();
            $table->string('direccion')->nullable();
            $table->string('celular')->nullable();
            $table->unsignedBigInteger('centro_id')->nullable();
            $table->unsignedBigInteger('movilizador_id')->nullable();
            $table->boolean('invitado')->default(false);
            $table->boolean('tiene_dni')->default(false);
            $table->boolean('movilizacion')->default(true);
            $table->timestamps();

            $table->foreign('centro_id')->references('id')->on('centros')->onDelete('set null');
            $table->foreign('movilizador_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('votantes', function (Blueprint $table) {
            $table->dropForeign(['centro_id']);
            $table->dropForeign(['movilizador_id']);
        });

        Schema::dropIfExists('votantes');
    }
};
