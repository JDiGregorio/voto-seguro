<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;

class MovilizadorLoginController extends Controller
{
    public function create()
    {
        return inertia('Auth/MovilizadorLogin');
    }

    public function store(Request $request)
    {
        $request->validate([
            'dni' => ['required', 'string'],
            'codigo_acceso' => ['required', 'string'],
        ]);

        $user = User::where('dni', $request->dni)->first();

        if (!$user || !Hash::check($request->codigo_acceso, $user->codigo_acceso)) {
            return back()->withErrors([
                'dni' => 'El DNI o código de acceso son incorrectos.',
            ])->onlyInput('dni');
        }

        Auth::login($user, $request->boolean('remember'));

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
