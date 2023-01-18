<?php

$nama = 'ayyub';

function selamat()
{
    global $nama;
    global $hasil;
    $hasil = 12;
    echo 'selamat pagi' . ' ' . $nama . '<br>';
}
selamat();
echo $hasil;
