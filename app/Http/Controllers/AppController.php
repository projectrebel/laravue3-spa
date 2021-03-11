<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function index()
    {
        return redirect('app/page-1');
    }

    public function app()
    {
        return view('app', [
            'user' => auth()->user()
        ]);
    }
}
