var urlName = 'https://restcountries.eu/rest/v1/name/';
var urlCapital = 'https://restcountries.eu/rest/v1/capital/';
var countryInfo = $('#countryinfo');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#countryname').val();
	if(!countryName.length) countryName = 'Poland';
	var capital = $.ajax({
				url: urlCapital + countryName,
				method: 'GET',
				success: showCountriesList
			});
	var name = $.ajax({
				url: urlName + countryName,
				method: 'GET',
				success: showCountriesList
			});
	};

function showCountriesList(resp) {
	countryInfo.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name + ' (' + item.capital + ')').appendTo(countryInfo);		
	});
}