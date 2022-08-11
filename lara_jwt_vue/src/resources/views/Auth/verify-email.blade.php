@section('title', 'Confirm Email')

@section('content')
    @include('partials.header')

    <p>Confirm email</p>

    <a href="{{route('verification.send')}}">
        Send Again
    </a>
@endsection
@endsection
