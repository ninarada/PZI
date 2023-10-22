<?php include("../zajednicko/zaglavlje.php");?>
<?php require_once("../zajednicko/spajanje_baza.php");?>

<?php
if(isset($_REQUEST["botun"]))
{ 
$ime = $mysqli->real_escape_string($_REQUEST["ime"]);
$prezime = $mysqli->real_escape_string($_REQUEST["prezime"]);

if(empty($ime) && empty($prezime))
{
	echo "Trebat unijeti ili ime ili prezime studenta ili oboje";
}
else
{
	$result = $mysqli->query("SELECT * FROM studenti WHERE ime LIKE '%$ime' AND prezime LIKE '%$prezime' ORDER BY prezime, ime ") ;
	echo "<table><tr><td>Broj indeksa </td> <td>Ime </td> <td>Prezime</td></tr>";

	while ($myrow=$result->fetch_row())
	{
		echo "<tr><td>".$myrow[3]."</td><td> ".$myrow[1]."</td><td> ".$myrow[2]."</td></tr>";
	}
	echo "</table>";

}

}
else if (isset($_REQUEST["botun_kolegij"]))
{
	$vracen_kolegij = $_REQUEST["kolegij"];
	$kolegiji = $mysqli->query("SELECT * FROM studenti_kolegij WHERE id_kolegija=$vracen_kolegij") ;
	echo "<table><tr><td>Broj indeksa </td> <td>Ime </td> <td>Prezime</td></tr>";
	while($dohvati_kolegij=$kolegiji->fetch_row())
	{
		$student = $mysqli->query("SELECT * FROM studenti WHERE  id_studenta=$dohvati_kolegij[1]");

		if($dohvati_student=$student->fetch_row())
		{
			echo "<tr><td>".$dohvati_student[3]."</td><td> ".$dohvati_student[1]."</td><td> ".$dohvati_student[2]."</td></tr>";
		}
	}
	echo "</table>";

}
else 
{
?>
<div>Pretraživanje studenata po imenu i prezimenu</div>
<form METHOD="POST" ACTION="<?echo $_SERVER["PHP_SELF"];?>">
<table>
<tr><td>Ime: <INPUT TEXT NAME="ime"></td></tr>
<tr><td>Prezime: <INPUT TEXT NAME="prezime"></td></tr>
<tr><td><input type="submit" name="botun" value="TRAŽI" size="1" ></td></tr>
</table>
</form>
<div>Pretraživanje studenata po kolegiju</div>
<form METHOD="POST" ACTION="<?echo $_SERVER["PHP_SELF"];?>">
<table>
<tr><td><select name="kolegij">
<?
$kolegiji = $mysqli->query("SELECT * FROM kolegiji ORDER BY ime_kolegija");
while($dohvati_kolegij=$kolegiji->fetch_row())
{
?>
   <option value="<?echo $dohvati_kolegij[0]?>"><?echo $dohvati_kolegij[1]?></option>
<?
}
?>
 </select> 

</td></tr>
<tr><td><input type="submit" name="botun_kolegij" value="TRAŽI" size="1" ></td></tr></table>
</form>
<?php
}
?>


<?php include("../zajednicko/podnozje.php");?>