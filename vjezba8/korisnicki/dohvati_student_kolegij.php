<?php require_once("../zajednicko/spajanje_baza.php");?>
<?
if (!(empty($_REQUEST["id_kolegija"])))
{
	$vracen_kolegij = $_REQUEST["id_kolegija"];
	$kolegiji = $mysqli->query("SELECT * FROM studenti_kolegij WHERE id_kolegija=$vracen_kolegij") ;

	echo "Broj indeksa Ime Prezime<br>";	
	while($dohvati_kolegij=$kolegiji->fetch_row())
	{
		$student = $mysqli->query("SELECT * FROM studenti WHERE  id_studenta=$dohvati_kolegij[1]");

		if($dohvati_student=$student->fetch_row())
		{
			echo $dohvati_student[3]." ".$dohvati_student[1]." ".$dohvati_student[2]."<br>";
			
		}
	}


}
else
 echo "*****************";
?>