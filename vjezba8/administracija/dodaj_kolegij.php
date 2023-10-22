<?php include("../zajednicko/zaglavlje.php");?>
<?php require_once("../zajednicko/spajanje_baza.php");?>

<?
if(!(empty($_REQUEST["ime_kolegija"])) && isset($_REQUEST["botun"]))
{
	$ime_kolegija = $mysqli->real_escape_string($_REQUEST["ime_kolegija"]);
	
	$dodaj = $mysqli->query("INSERT INTO kolegiji(ime_kolegija ) VALUES('$ime_kolegija')") ;
	
	echo "Podaci su ubačeni";


}
else
 {
?>

<form METHOD="POST" ACTION="<?echo $_SERVER["PHP_SELF"];?>">
<TABLE>
<TR><TD>
<BR>Ubacivanje kolegija <BR>
Ime kolegija: <INPUT type="text" NAME="ime_kolegija" id="ime_kolegija"><br>

</TD>
<TD>

<br>
<input type="submit" name="botun" value="Ubaci kolegij" size="1" > 
</TD>
</TR></TABLE></form>
<?
}
?>
<?php include("../zajednicko/podnozje.php");?>