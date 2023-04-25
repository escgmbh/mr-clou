<script setup></script>
<template>
    <div class="navbar bg-white h-36 fixed">
        <div class="flex-1">
            <a class="  " href="/"
                ><img
                    src="public/images/mrclou_logo-1.png"
                    alt="logo of mr. clou"
                    class="w-60"
            /></a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1 font-semibold">
                <li><a class="uppercase">Home</a></li>
                <li tabindex="0">
                    <a class="uppercase">
                        unser sortiment
                        <svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            />
                        </svg>
                    </a>
                    <ul class="p-2 bg-green-500 text-white">
                        <li><a class="uppercase">säfte & mehr</a></li>
                        <li><a class="uppercase">detox yourself</a></li>
                        <li><a class="uppercase">salat bowls and wraps</a></li>
                        <li><a class="uppercase">speisen</a></li>
                        <li><a class="uppercase">desserts</a></li>
                        <li><a class="uppercase">nähwertangaben</a></li>
                    </ul>
                </li>
                <li><a class="uppercase text-orange-500">superfoods</a></li>
            </ul>
        </div>
    </div>
</template>
