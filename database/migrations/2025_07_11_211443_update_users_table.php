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
        Schema::table('users', function (Blueprint $table) {
            $table->string('dni')->unique()->nullable()->after('email');
            $table->unsignedBigInteger('coordinador_id')->nullable()->after('password');
            $table->integer('codigo_acceso')->nullable()->after('coordinador_id');
            $table->boolean('activo')->default(true)->after('remember_token');

            $table->foreign('coordinador_id')->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['coordinador_id']);

            $table->dropColumn('dni');
            $table->dropColumn('coordinador_id');
            $table->dropColumn('codigo_acceso');
            $table->dropColumn('activo');
        });
    }
};
