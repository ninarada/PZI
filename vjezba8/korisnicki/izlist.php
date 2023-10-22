<?php include("../zajednicko/zaglavlje.php");?>
<?php require_once("../zajednicko/spajanje_baza.php");?>
<div><table>
<?php
$result = $mysqli->query("SELECT * FROM studenti  ORDER BY prezime, ime ") ;
echo "<tr><td>Broj indeksa </td> <td>Ime </td> <td>Prezime</td></tr>";
while ($myrow=$result->fetch_row())
{
	echo "<tr><td>".$myrow[3]."</td><td> ".$myrow[1]."</td><td> ".$myrow[2]."</td></tr>";
		
}
?>
</table>
</div>

<?php include("../zajednicko/podnozje.php");?>