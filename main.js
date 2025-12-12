<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Mechanik</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
        }

        .container {
            max-width: 420px;
            margin: 40px auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        h1 {
            font-size: 18px;
            margin: 15px 0 8px;
        }

        select {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            margin-top: 20px;
            padding: 12px;
            font-size: 16px;
            background: #2c7be5;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        button:hover {
            background: #1a66d1;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Spare Part:</h1>
    <select id="stationDropdown" size="10">
        <option value="4001692_DISPLAY">4001692 DISPLAY</option>
        <option value="4000172_DISPLAY_COVER">4000172 DISPLAY COVER</option>
        <option value="4000161_MANETKA">4000161 MANETKA</option>
        <option value="4000618_GUZIK_DO_KIERUNKOWSKAZOW">4000618 GUZIK DO KIERUNKOWSKAZÓW</option>
        <option value="4000169_KLAMKA_LEWA">4000169 KLAMKA LEWA</option>
        <option value="4000162_KLAMKA_PRAWA">4000162 KLAMKA PRAWA</option>
        <option value="4000182_SWIATELKO_KIEROWNIC">4000182 ŚWIATEŁKO KIEROWNIC</option>
        <option value="4000611_KIERUNKOWSKAZ_KIEROWNICY_LEWY">4000611 KIERUNKOWSKAZ KIEROWNICY LEWY</option>
        <option value="4000612_KIERUNKOWSKAZ_KIEROWNICY_PRAWY">4000612 KIERUNKOWSKAZ KIEROWNICY PRAWY</option>
        <option value="4000614_KABEL_DO_KIERUNKOWSKAZOW_KIEROWNICY">4000614 KABEL DO KIERUNKOWSKAZÓW KIEROWNICY</option>
        <option value="4000420_PRZEDLUZKA_KABLA_KIEROWNICY">4000420 PRZEDŁUŻKA KABLA KIEROWNICY</option>
        <option value="4000164_PLASTIK_GORA">4000164 PLASTIK GÓRA</option>
        <option value="4000180_PLASTIK_DOL">4000180 PLASTIK DÓŁ</option>
        <option value="4001685_STEROWNIK">4001685 STEROWNIK</option>
        <option value="4000701_ZAMEK">4000701 ZAMEK</option>
        <option value="4001721_CONTROL_BOX">4001721 CONTROL BOX</option>
        <option value="4001723_KABEL_PRZOD_TROJNIKI">4001723 KABEL PRZÓD (TRÓJNIKI)</option>
        <option value="4001035_KABEL_TYLNY">4001035 KABEL TYLNY</option>
        <option value="4001006_SILNIK_BEZ_OPONY">4001006 SILNIK BEZ OPONY</option>
    </select>

    <h1>Mechanic:</h1>
    <select id="mechanicDropdown" size="10">
        <option value="ARTEM_MAKOVETSKYI">ARTEM_MAKOVETSKYI</option>
        <option value="DAWID_PIETRZYCKI">DAWID_PIETRZYCKI</option>
        <option value="KINGA_SZCZENIOWSKA">KINGA_SZCZENIOWSKA</option>
        <option value="MATEUSZ_NOWAK">MATEUSZ_NOWAK</option>
        <option value="AMELIA_KACZKOWSKA">AMELIA_KACZKOWSKA</option>
        <option value="NATALIIA_SILIVEISTROVA">NATALIIA_SILIVEISTROVA</option>
        <option value="TETIANA_SHYMANSKA">TETIANA_SHYMANSKA</option>
        <option value="VASYL_VOVK">VASYL_VOVK</option>
        <option value="VIRA_SANDOMIERSKA">VIRA_SANDOMIERSKA</option>
        <option value="MAŁGORZATA_BARAŃSKA">MAŁGORZATA_BARAŃSKA</option>
        <option value="NATALIIA_VASALAKIIEVA">NATALIIA_VASALAKIIEVA</option>
    </select>

    <button id="goButton">Go</button>
</div>

<script>
document.getElementById("goButton").addEventListener("click", function () {

    let selectedMechanic = document.getElementById("mechanicDropdown").value;
    let selectedSparePart = document.getElementById("stationDropdown").value;

    if (!selectedMechanic || !selectedSparePart) {
        alert("Wybierz mechanika oraz część (Spare Part).");
        return;
    }

    selectedMechanic = selectedMechanic.toUpperCase();
    selectedSparePart = selectedSparePart.toUpperCase();

    const baseRedirectURL =
        "https://web.miniextensions.com/iZC8bQQmgC94HrP8oiSm" +
        "?prefill_Mechanic=" + encodeURIComponent(selectedMechanic) +
        "&prefill_Spare_Part=" + encodeURIComponent(selectedSparePart);

    window.location.href = baseRedirectURL;
});
</script>

</body>
</html>
