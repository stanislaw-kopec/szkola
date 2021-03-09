<?php
require_once "configuration.php";
class Item{
    public static  int $counter=0;
    public int $itemId;
    public string $name;
    public function __construct(string $name="noname")
    {
       $this->itemId = ++self::$counter;
       $this->name = $name;
    }
    public function toJSON():string
    {
        return json_encode($this);
    }
    public function fromJSON(string $json):Item {
        //ze stringa objekt item (funkcja z linijki 11 do 14) to mi nie działa!!!
        $filePath = getcwd().DIRECTORY_SEPARATOR.DIR.DIRECTORY_SEPARATOR.ITEM_FILE;
            if (file_exists($filePath)){
                $ItemData = file_get_contents($filePath);
                $Item = unserialize($ItemData);           
                    if (!empty($Item)){
                        $itemId = $Item->itemId;
                        $name = $Item->name;
                        }
            }
            return $Item;
            echo "Z JSONa: ";
            echo $Item;
    }
}