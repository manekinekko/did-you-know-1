<?php 

	$facts = json_decode(file_get_contents("ALL.json"), true);
	$random_facts = $facts[ rand(1, count($facts)) ];
	$random_facts_category = $random_facts["text"];
	$random_fact = $random_facts["facts"][ rand(1, count($random_facts)) ];
	if(is_null($random_fact)){
		$random_fact = $random_facts["facts"][ rand(1, count($random_facts)) ];
	}
	header('Content-type: text/xml');
?>
<tile>
	<visual>
		<binding template="TileWideImageAndText01">
			<image alt="DYK" id="1" src="http://dyk.cheghamwassim.com/images/DYK-310x150.png"/>
			<!-- <text id="1"><?php echo $random_facts_category; ?></text> -->
			<text id="1"><?php echo $random_fact; ?></text>
		</binding>
	</visual>
</tile>