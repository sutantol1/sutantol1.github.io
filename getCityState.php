<?php
// getcitystate.php
// Gets the form value from zip, looks uo the city and state for that zip code,
// and print it for the form

$cityState = array("95490" => "Willits, California",
"94112" => "San Francisco, California",
"95401" => "Santa Rosa, California",
"81611" => "Aspen, Colorado",
"81657" => "Vail, Colorado",
"97206" => "Portland, Oregon",
"97401" => "Eugene, Oregon",
"98101" => "Seattle, Washington",
"99201" => "Spokane, Washington",
"78628" => "Georgetown, Texas",
"94596" => "Walnut Creek, California"
);
// set MIMe type to text/plain
// so that the returned value is assigned to responseText in the Ajax script

header("Content-Type: text/plain");
$zip = $_GET["zip"];
if (array_key_exists($zip, $cityState))
print $cityState[$zip];
else
print "zip code error, zip code error";
?>