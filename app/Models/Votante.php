<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Votante extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'votantes';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nombre',
        'dni',
        'direccion',
        'celular',
        'centro_id',
        'movilizador_id',
        'invitado',
        'tiene_dni',
        'movilizacion',
        'detalles_movilizacion',
        'estado_censo',
    ];
}
