<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
        <!-- Toggle button -->
        <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
                <!-- Left links -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    @foreach($items as $menu_item)
                        @if($menu_item->children->isEmpty())
                        <li class="nav-item"><a  class="nav-link" href="{{ $menu_item->link() }}">{{ $menu_item->title }}</a></li>
                        @else
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {{ $menu_item->title }}
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
<!--                                    class="dropdown-toggle" data-toggle="dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false-->

                                        @if(!$menu_item->children->isEmpty())
                                            @include('my_menu', ['items' => $menu_item->children, 'options' => $options, 'innerLoop' => true])
                                        @endif
                                </ul>
                            </li>
                            @endif
                    @endforeach
                </ul>

                <!-- Left links -->
            </div>

            <div class="d-flex align-items-center">

            </div>
        </div>
        <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
</nav>
<!-- Navbar -->
