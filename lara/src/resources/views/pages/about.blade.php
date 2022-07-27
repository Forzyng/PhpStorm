@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                        <div class="card-header">Управляющие конструкции</div>
                    @php
                    echo "Work @PHP";
                    $isActive = false;
                    $hasError = true;
                    @endphp

                    <span @class([
                            'p-4',
                            'font-bold' => $isActive,
                            'text=gray-500' => ! $isActive,
                            'bg-red' => $hasError
                    ])>test</span>
                    <ul>
                        @for($i = 0; $i < 10; $i++)
                            <li>The current value is {{$i}}</li>
                            @endfor
                    </ul>
                    <div>
                        @switch($forCase)
                            @case(1)
                            First
                            @break

                            @case(2)
                            Second
                            @break

                            @case(3)
                                Third
                                @break
                            @default
                            Default
                        @endswitch

                    </div>

                        <div>
                            @if (isset($records) && is_array($records) && count($records) == 1)
                                I have one record
                                @elseif ((isset($records) && is_array($records) && count($records) > 1))
                            I have many records
                            @else
                            No records(
                                @endif
                        </div>
                </div>
            </div>
        </div>
    </div>
@endsection
{{--@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    @isset($varName)
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        {{$varName}} - по ключам, без ViewBug
                        @auth
                            Autho
                        @endauth

                        @guest
                            Not autho
                        @endguest
                    </div>
                        @endif

                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer')
    itstep
    @include('inc.counter')
@endsection--}}
