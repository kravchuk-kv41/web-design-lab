<?php

    writeToFile();
    echo json_encode(loadFromFile());

    function generateRandomNumbers()
    {
        $array = [];
        for ($i = 0; $i < 6; $i++) {
            $array[] = rand(1, 100);
        }
        return $array;
    }

    function writeToFile()
    {
        $array = generateRandomNumbers();
        $doc = new DOMDocument('1.0');
        $doc->formatOutput = true;
        $root = $doc->createElement('root');
        $root = $doc->appendChild($root);
        foreach($array as $key => $value) {
            $em = $doc->createElement("_" . $key);
            $text = $doc->createTextNode($value);
            $em->appendChild($text);
            $root->appendChild($em);
        }
        $doc->save('data.xml');
    }

    function loadFromFile()
    {
        $array = [];
        $doc = new DOMDocument();
        $doc->load("data.xml");
        $root = $doc->getElementsByTagName("root");
        $array = explode("\n", $doc->textContent);
        unset($array[0]);
        unset($array[7]);
        return array_map(function ($item) {
            return (int) $item;
        }, array_values($array));
    }