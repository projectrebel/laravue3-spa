<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        return redirect('app/dashboard');
    }

    public function app()
    {
        return view('app', [
            'user' => auth()->user()
        ]);
    }
}
