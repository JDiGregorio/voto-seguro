<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Votante;

class VotanteController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'dni' => ['required', 'string', 'unique:votantes,dni'],
            'nombre' => ['required', 'string'],
            'telefono' => ['nullable', 'string'],
            'direccion' => ['nullable', 'string'],
            'centro' => ['nullable', 'string'],
            'estado' => ['nullable', 'string'],
            'tieneDni' => ['required', 'boolean'],
            'movilizacion' => ['required', 'boolean'],
            'detallesMovilizacion' => ['nullable', 'string'],
        ]);

        Votante::create([
            'nombre' => $request->nombre,
            'dni' => $request->dni,
            'celular' => $request->telefono,
            'direccion' => $request->direccion,
            'centro_id' => null,
            'movilizador_id' =>  $user->id,
            'invitado' => false,
            'estado_censo' => $request->estado_censo,
            'tiene_dni' => $request->tieneDni,
            'movilizacion' => $request->movilizacion,
            'detalles_movilizacion' => $request->detallesMovilizacion
        ]);

        return redirect()->route('votantes')->with('success', 'Votante registrado exitosamente.');
    }

    public function storeInvitado(Request $request)
    {
        $request->validate([
            'dni' => ['required', 'string', 'unique:votantes,dni'],
            'nombre' => ['required', 'string'],
            'telefono' => ['nullable', 'string'],
            'direccion' => ['nullable', 'string'],
            'centro' => ['nullable', 'string'],
            'estado' => ['nullable', 'string'],
            'tieneDni' => ['required', 'boolean'],
            'movilizacion' => ['required', 'boolean'],
            'detallesMovilizacion' => ['nullable', 'string'],
        ]);

        Votante::create([
            'nombre' => $request->nombre,
            'dni' => $request->dni,
            'celular' => $request->telefono,
            'direccion' => $request->direccion,
            'centro_id' => null,
            'movilizador_id' => null,
            'invitado' => true,
            'estado_censo' => $request->estado_censo,
            'tiene_dni' => $request->tieneDni,
            'movilizacion' => $request->movilizacion,
            'detalles_movilizacion' => $request->detallesMovilizacion
        ]);

        return redirect('/')->with('success', 'Votante registrado exitosamente.');
    }
}
