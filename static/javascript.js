document.getElementById('state').addEventListener('change', function () {
    var state = this.value;
    var districtDropdown = document.getElementById('district');

    // Clear the current options
    districtDropdown.innerHTML = '<option value="" disabled selected>Select your district</option>';

    // Define the districts for each state
    var districts = {
        'andhra-pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore'],
        'arunachal-pradesh': ['Itanagar', 'Tawang', 'Ziro'],
        'assam': ['Guwahati', 'Dibrugarh', 'Tezpur'],
        'bihar': ['Patna', 'Gaya', 'Bhagalpur'],
        'chhattisgarh': ['Raipur', 'Bilaspur', 'Durg'],
        'goa': ['Panaji', 'Margao', 'Vasco da Gama'],
        'gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
        'haryana': ['Gurgaon', 'Faridabad', 'Panipat'],
        'himachal-pradesh': ['Shimla', 'Manali', 'Dharamshala'],
        'jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
        'karnataka': ['Bangalore', 'Mysore', 'Mangalore'],
        'kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
        'madhya-pradesh': ['Bhopal', 'Indore', 'Gwalior'],
        'maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'manipur': ['Imphal', 'Churachandpur', 'Thoubal'],
        'meghalaya': ['Shillong', 'Tura', 'Nongpoh'],
        'mizoram': ['Aizawl', 'Lunglei', 'Saiha'],
        'nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
        'odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela'],
        'punjab': ['Chandigarh', 'Ludhiana', 'Amritsar'],
        'rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur'],
        'sikkim': ['Gangtok', 'Namchi', 'Gyalshing'],
        'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai'],
        'telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
        'tripura': ['Agartala', 'Udaipur', 'Dharmanagar'],
        'uttar-pradesh': ['Lucknow', 'Kanpur', 'Varanasi'],
        'uttarakhand': ['Dehradun', 'Haridwar', 'Nainital'],
        'west-bengal': ['Kolkata', 'Darjeeling', 'Howrah']
    };

    // Populate the district dropdown based on selected state
    if (districts[state]) {
        districts[state].forEach(function(district) {
            var option = document.createElement('option');
            option.value = district.toLowerCase().replace(/\s+/g, '-');
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    }
});

