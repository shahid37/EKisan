const IndianStates = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"]



const Blocks = {

    // jharkhand
    "Ranchi": [
        "Angara", "Bero", "Bundu", "Burmu", "Chanho", "Itki", "Kanke", "Khelari", "Lapung", "Mandar", "Nagri", "Namkum", "Ormanjhi", "Rahe", "Ratu", "Silli", "Sonahatu", "Tamar I"],

    "Ramgarh": ["Chitarpur", "Dulmi", "Gola", "Mandu", "Patratu", "Ramgarh"],

    "Bokaro": [
        "Bermo", "Chandankiyari", "Chandrapura", "Chas", "Gumia", "Jaridih", "Kasmar", "Nawadih", "Peterwar"],

    "Chatra":
        ["Chatra", "Gidhaur", "Itkhori", "Kanha Chatti", "Kunda", "Lawalaung", "Mayur Hand", "Pathalgora", "Pratappur", "Shaligram Ram Narayanpur", "Simaria", "Tandwa"],

    "Deoghar": ["Deoghar", "Devipur", "Karon", "Madhupur", "Margo Munda", "Mohanpur", "Palojori", "Sarath", "Sarwan", "Sona Rai Tharhi"],

    "Dhanbad": ["Baghmara Cum Katras", "Baliapur", "Dhanbad Cum Kenduadih Cum Jagata", "Gobindpur", "Jharia Cum Jorapokhar Cum Sindri", "Nirsa Cum Chirkunda", "Purbi Tundi", "Topchanchi", "Tundi"],

    "Dumka": ["Dumka", "Gopikandar", "Jama", "Jarmundi", "Kathikund", "Masalia", "Ramgarh", "Ranishwar", "Saraiyahat", "Shikaripara"],

    "Garhwa": ["Bardiha", "Bhandaria", "Bhawnathpur", "Bishunpura", "Chinia", "Danda", "Dandai", "Dhurki", "Garhwa", "Kandi", "Ketar", "Kharaundhi", "Majhiaon", "Meral", "Nagaruntari", "Ramkanda", "Ramna", "Ranka", "Sagma"],

    "Giridih": ["Bagodar", "Bengabad", "Birni", "Deori", "Dhanwar", "Dumri", "Gande", "Gawan", "Giridih", "Jamua", "Pirtanr", "Sariya", "Tisri"],

    "Godda": ["Bashant Rai", "Boarijor", "Godda", "Mahagama", "Meherma", "Pathargama", "Poreyahat", "Sundarpahari", "Thakurgangti"],

    "Gumla": ["Albert Ekka", "Basia", "Bishunpur", "Chainpur", "Dumri", "Ghaghra", "Gumla", "Kamdara", "Palkot", "Raidih", "Sisai", "Verno"],

    "Hazaribagh": ["Barhi", "Barkagaon", "Barkatha", "Bishungarh", "Chalkusa", "Chauparan", "Churchu", "Dadi", "Daru", "Hazaribag", "Ichak", "Katamdag", "Katkamsandi", "Keredari", "Padma", "Tati Jhariya"],

    "Jamtara": ["Fatehpur", "Jamtara", "Karma Tanr Vidyasagar", "Kundhit", "Nala", "Narayanpur"],

    "Khunti": ["Erki", "Karra", "Khunti", "Murhu", "Rania", "Torpa"],

    "Kodarma": ["Chandwara", "Domchanch", "Jainagar", "Kodarma", "Markacho", "Satgawan"],

    "Latehar": ["Balumath", "Bariyatu", "Barwadih", "Chandwa", "Garu", "Herhanj", "Latehar", "Mahuadanr", "Manika"],

    "Lohardaga": ["Bhandra", "Kairo", "Kisko", "Kuru", "Lohardaga", "Peshrar", "Senha"],

    "Pakur": ["Amrapara", "Hiranpur", "Litipara", "Maheshpur", "Pakaur", "Pakuria"],

    "Palamu": ["Bishrampur", "Chainpur", "Chhatarpur", "Haidernagar", "Hariharganj", "Hussainabad", "Manatu", "Medininagar", "Mohammad Ganj", "Nawa Bazar", "Nawadiha Bazar Nawadiha", "Nilambar Pitambarpur", "Padwa", "Pandu", "Panki", "Patan", "Pipra", "Satbarwa", "Tarhasi", "Untari Road"],

    "East Singhbhum": ["Anandpur", "Bandgaon", "Chaibasa", "Chakradharpur", "Goilkera", "Gudri", "Hat Gamharia", "Jagannathpur", "Jhinkpani", "Khuntpani", "Kumardungi", "Majhgaon", "Manjhari", "Manoharpur", "Noamundi", "Sonua", "Tantnagar", "Tonto"],

    "West Singhbhum": ["Baharagora", "Boram", "Chakulia", "Dhalbhumgarh", "Dumaria", "Ghatshila", "Golmuri Cum Jugsalai", "Gurbandha", "Musabani", "Patamda", "Potka"],

    "Sahibganj": ["Barhait", "Barharwa", "Borio", "Mandro", "Pathna", "Rajmahal", "Sahibganj", "Taljhari", "Udhwa"],

    "Saraikela Kharsawan": ["Adityapur", "Chandil", "Gobindpur", "Ichagarh", "Kharsawan", "Kuchai", "Kukru", "Nimdih", "Saraikela"],

    "Simdega": ["Bano", "Bansjor", "Bolba", "Jaldega", "Kersai", "Kolebira", "Kurdeg", "Pakar Tanr", "Simdega", "Thethaitangar"],

    //chattisgarh
    "Bastar": ["Bade Rajpur", "Bakavand", "Bastanar", "Bastar", "Darbha", "Farasgaon", "Jagdalpur", "Keskal", "Kondagaon", "Lohandiguda", "Makdi", "Tokapal"],

    "Bijapur": ["Bhairamgarh", "Bhopalpattnam", "Bijapur", "Usur"],
    // eslint-disable-next-line
    "Bilaspur": ["Bilaspur", "Bilha", "Kota", "Lormi", "Marwahi", "Masturi", "Mungeli", "Pathariya", "Pendra", "Pendra Road Gorella", "Takhatpur"],

    "Dakshin Bastar Dantewada": ["Chhindgarh", "Dantewada", "Gidam", "Katekalyan", "Konta", "Kuakonda", "Sukma"],

    "Dhamtari": ["Dhamtari", "Kurud", "Magarlod", "Nagri"],

    "Durg": ["Balod", "Bemetara", "Berla", "Dhamdha", "Dondi", "Dondi Luhara", "Durg", "Gunderdehi", "Gurur", "Nawagarh", "Patan", "Saja", "Thanakhamria"],

    "Janjgir Champa": ["Akaltara", "Baloda", "Champa", "Dabhra", "Jaijaipur", "Janjgir", "Malkharoda", "Nawagarh", "Pamgarh", "Sakti"],

    "Jashpur": ["Bagicha", "Duldula", "Farsabahar", "Jashpur", "Kansabel", "Kunkuri", "Manora", "Pathalgaon"],

    "Kabeerdham": ["Bodla", "Kawardha", "Pandariya", "Sahaspur Lohara"],

    "Korba": ["Kartala", "Katghora", "Korba", "Pali", "Poundi Uproda"],

    "Koriya": ["Baikunthpur", "Bharatpur", "Khadganva", "Manendragarh", "Sonhat"],

    "Mahasamund": ["Bagbahra", "Basna", "Mahasamund", "Pithora", "Saraipali"],

    "Narayanpur": ["Narayanpur", "Orchha"],

    "Raigarh": ["Baramkela", "Gharghoda", "Kharsia", "Lailunga", "Pusour", "Raigarh", "Sarangarh", "Tamnar", "Udaipur"],

    "Raipur": ["Abhanpur", "Arang", "Baloda Bazar", "Bhatapara", "Bilaigarh", "Bindranavagarh", "Chhura", "Deobhog", "Kasdol", "Mainpur", "Palari", "Raipur", "Rajim", "Simga", "Tilda"],

    "Rajnandgaon": ["Ambagarh", "Chhuikhadan", "Chhuriya", "Dongargaon", "Dongargarh", "Khairagarh", "Manpur", "Mohla", "Rajnandgaon"],

    "Surguja": ["Ambikapur", "Balrampur", "Batouli", "Bhaiyathan", "Lakhanpur", "Lundra", "Mainpat", "Oudgi", "Pratappur", "Premnagar", "Rajpur", "Ramanujganj", "Ramanujnagar", "Samri", "Shankargarh", "Sitapur", "Surajpur", "Udaypur", "Wadrafnagar"],

    "Uttar Bastar Kanker": ["Antagarh", "Bhanupratappur", "Charama", "Durgkondal", "Kanker", "Narharpur", "Pakhanjur"],

    // Utter Perdash
    "Agra": ["Agra", "Bah", "Etmadpur", "Fatehabad", "Kheragarh", "Kiraoli"],

    "Aligarh": ["Atrauli", "Gabhana", "Iglas", "Khair", "Koil"],

    "Allahabad": ["Allahabad", "Bara", "Handia", "Karchhana", "Koraon", "Meja", "Phulpur", "Soraon"],

    "Ambedkar Nagar": ["Akbarpur", "Allapur", "Bhiti", "Jalalpur", "Tanda"],

    "Auraiya": ["Auraiya", "Bidhuna"],

    "Azamgarh": ["Azamgarh", "Burhanpur", "Lalganj", "Mehnagar", "Nizamabad", "Phulpur", "Sagri"],

    "Baghpat": ["Baghpat", "Baraut", "Khekada"],

    "Bahraich": ["Bahraich", "Kaiserganj", "Mahasi", "Nanpara"],

    "Ballia": ["Bairia", "Ballia", "Bansdih", "Belthara Road", "Rasra", "Sikanderpur"],
    "Balrampur": ["Balrampur", "Tulsipur", "Utraula"],

    "Bara Banki": ["Fatehpur", "Haidergarh", "Nawabganj", "Ramnagar", "Ramsanehighat", "Sirauli Gauspur"],

    "Bareilly": ["Aonla", "Baheri", "Bareilly", "Faridpur", "Meerganj", "Nawabganj"],

    "Basti": ["Basti", "Bhanpur", "Harraiya", "Rudhauli"],

    "Bijnor": ["Bijnor", "Chandpur", "Dhampur", "Nagina", "Najibabad"],

    "Budaun": ["Bilsi", "Bisauli", "Budaun", "Dataganj", "Gunnaur", "Sahaswan"],

    "Bulandshahr": ["Anupshahr", "Bulandshahr", "Debai", "Khurja", "Shikarpur", "Siana", "Sikandrabad"],

    "Chandauli": ["Chakia", "Chandauli", "Sakaldiha"],

    "Chitrakoot": ["Karwi", "Mau"],

    "Deoria": ["Barhaj", "Bhatpar Rani", "Deoria", "Rudrapur", "Salempur"],

    "Etah": ["Aliganj", "Etah", "Jalesar"],

    "Etawah": ["Bharthana", "Chakarnagar", "Etawah", "Jaswantnagar", "Saifai"],

    "Faizabad": ["Bikapur", "Faizabad", "Milkipur", "Rudauli", "Sohawal"],

    "Farrukhabad": ["Amritpur", "Farrukhabad", "Kaimganj"],

    "Fatehpur": ["Bindki", "Fatehpur", "Khaga"],

    "Firozabad": ["Firozabad", "Jasrana", "Shikohabad", "Tundla"],

    "Gautam Buddha Nagar": ["Dadri", "Gautam Buddha Nagar", "Jewar"],

    "Ghaziabad": ["Garhmukteshwar", "Ghaziabad", "Hapur", "Modinagar"],

    "Ghazipur": ["Ghazipur", "Jakhania", "Mohammadabad", "Saidpur", "Zamania"],

    "Gonda": ["Colonelganj", "Gonda", "Mankapur", "Tarabganj"],

    "Gorakhpur": ["Bansgaon", "Campierganj", "Chauri Chaura", "Gola", "Gorakhpur", "Khajni", "Sahjanwa"],
    // eslint-disable-next-line
    "Hamirpur": ["Hamirpur", "Maudaha", "Rath", "Sarila"],

    "Hardoi": ["Bilgram", "Hardoi", "Sandila", "Sawayajpur", "Shahabad"],

    "Jalaun": ["Jalaun", "Kalpi", "Konch", "Madhogarh", "Orai"],

    "Jaunpur": ["Badlapur", "Jaunpur", "Kerakat", "Machhlishahr", "Mariahu", "Shahganj"],

    "Jyotiba Phule Nagar": ["Amroha", "Dhanaura", "Hasanpur"],

    "Kannauj": ["Chhibramau", "Kannauj", "Tirwa"],

    "Kanpur Dehat": ["Akbarpur", "Bhognipur", "Derapur", "Rasulabad", "Sikandra"],

    "Kanpur Nagar": ["Bilhaur", "Ghatampur", "Kanpur"],

    "Kanshiram Nagar": ["Kasganj", "Patiyali", "Sahawar"],

    "Kheri": ["Dhaurahara", "Gola Gokaran Nath", "Lakhimpur", "Mohammdi", "Nighasan", "Palia"],

    "Kushinagar": ["Hata", "Kasya", "Padrauna", "Tamkuhi Raj"],

    "Lalitpur": ["Lalitpur", "Mahroni", "Talbehat"],

    "Lucknow": ["Bakshi Ka Talab", "Lucknow", "Malihabad", "Mohanlalganj"],

    "Mahamaya Nagar": ["Hathras", "Sadabad", "Sasni", "Sikandra Rao"],

    "Mahoba": ["Charkhari", "Kulpahar", "Mahoba"],

    "Mahrajganj": ["Maharajganj", "Nautanwa", "Nichlaul", "Pharenda"],

    "Mainpuri": ["Bhogaon", "Karhal", "Mainpuri"],

    "Mathura": ["Chhata", "Mahavan", "Mat", "Mathura"],

    "Mau": ["Ghosi", "Madhuban", "Maunath Bhanjan", "Muhammadabad Gohna"],

    "Meerut": ["Mawana", "Meerut", "Sardhana"],

    "Mirzapur": ["Chunar", "Lalganj", "Marihan", "Mirzapur"],

    "Moradabad": ["Bilari", "Chandausi", "Kanth", "Moradabad", "Sambhal", "Thakurdwara"],

    "Muzaffarnagar": ["Budhana", "Jansath", "Kairana", "Khatauli", "Muzaffarnagar", "Shamli"],

    "Pilibhit": ["Bisalpur", "Pilibhit", "Puranpur"],

    "Pratapgarh": ["Kunda", "Lalganj", "Patti", "Pratapgarh", "Raniganj"],

    "Rae Bareli": ["Dalmau", "Lalganj", "Maharajganj", "Rae Bareli", "Salon", "Tiloi", "Unchahar"],

    "Rampur": ["Bilaspur", "Milak", "Rampur", "Shahabad", "Suar", "Tanda"],

    "Saharanpur": ["Behat", "Deoband", "Nakur", "Rampur Maniharan", "Saharanpur"],

    "Sant Kabir Nagar": ["Ghanghata", "Khalilabad", "Mehdawal"],

    "Sant Ravidas Nagar": ["Aurai", "Bhadohi", "Gyanpur"],

    "Shahjahanpur": ["Jalalabad", "Powayan", "Shahjahanpur", "Tilhar"],

    "Shrawasti": ["Bhinga", "Ikauna"],

    "Siddharthnagar": ["Bansi", "Domariyaganj", "Itwa", "Naugarh", "Shohratgarh"],

    "Sitapur": ["Biswan", "Laharpur", "Mahmudabad", "Misrikh", "Sidhauli", "Sitapur"],

    "Sonbhadra": ["Dudhi", "Ghorawal", "Robertsganj"],

    "Sultanpur": ["Amethi", "Gauriganj", "Jaisinghpur", "Kadipur", "Lambhua", "Musafirkhana", "Sultanpur"],

    "Unnao": ["Bighapur", "Hasanganj", "Purwa", "Safipur", "Unnao"],

    "Varanasi": ["Pindra", "Varanasi"],
    // Delhi
    "Central Delhi": ["Darya Ganj", "Karol Bagh", "Pahar Ganj"],
    "East Delhi": ["Gandhi Nagar", "Preet Vihar", "Vivek Vihar"],
    "New Delhi": ["Chanakya Puri", "Connaught Place", "Parliament Street"],
    "North Delhi": ["Civil Lines", "Kotwali", "Sadar Bazar"],
    "North East Delhi": ["Seelam Pur", "Seema Puri", "Shahdara"],
    "North West Delhi": ["Model Town", "Narela", "Saraswati Vihar"],
    "South Delhi": ["Defence Colony", "Hauz Khas", "Kalkaji"],
    "South West Delhi": ["Delhi Cantonment", "Najafgarh", "Vasant Vihar"],
    "West Delhi": ["Patel Nagar", "Punjabi Bagh", "Rajouri Garden"],
    // Goa
    "North Goa": ["Bardez", "Bicholim", "Pernem", "Ponda", "Satari", "Tiswadi"],
    "South Goa": ["Canacona", "Mormugao", "Quepem", "Salcete", "Sanguem"],
    // Gujrat
    "Ahmadabad": ["Ahmadabad City", "Barwala", "Bavla", "Daskroi", "Detroj Rampura", "Dhandhuka", "Dholka", "Mandal", "Ranpur", "Sanand", "Viramgam"],
    "Amreli": ["Amreli", "Babra", "Bagasara", "Dhari", "Jafrabad", "Khambha", "Kunkavav Vadia", "Lathi", "Lilia", "Rajula", "Savar Kundla"],
    "Anand": ["Anand", "Anklav", "Borsad", "Khambhat", "Petlad", "Sojitra", "Tarapur", "Umreth"],
    "Banas Kantha": ["Amirgadh", "Bhabhar", "Danta", "Dantiwada", "Deesa", "Deodar", "Dhanera", "Kankrej", "Palanpur", "Tharad", "Vadgam", "Vav"],
    "Bharuch": ["Amod", "Anklesvar", "Bharuch", "Hansot", "Jambusar", "Jhagadia", "Vagra", "Valia"],
    "Bhavnagar": ["Bhavnagar", "Botad", "Gadhada", "Gariadhar", "Ghogha", "Mahuva", "Palitana", "Sihor", "Talaja", "Umrala", "Vallabhipur"],
    "Dohad": ["Devgadbaria", "Dhanpur", "Dohad", "Fatepura", "Garbada", "Jhalod", "Limkheda"],
    "Gandhinagar": ["Dehgam", "Gandhinagar", "Kalol", "Mansa"],
    "Jamnagar": ["Bhanvad", "Dhrol", "Jamjodhpur", "Jamnagar", "Jodiya", "Kalavad", "Kalyanpur", "Khambhalia", "Lalpur", "Okhamandal"],
    "Junagadh": ["Bhesan", "Junagadh", "Keshod", "Kodinar", "Malia", "Manavadar", "Mangrol", "Mendarda", "Patan Veraval", "Sutrapada", "Talala", "Una", "Vanthali", "Visavadar"],
    "Kachchh": ["Abdasa", "Anjar", "Bhachau", "Bhuj", "Gandhidham", "Lakhpat", "Mandvi", "Mundra", "Nakhatrana", "Rapar"],
    "Kheda": ["Balasinor", "Kapadvanj", "Kathlal", "Kheda", "Mahudha", "Matar", "Mehmedabad", "Nadiad", "Thasra", "Virpur"],
    "Mahesana": ["Becharaji", "Kadi", "Kheralu", "Mahesana", "Satlasana", "Unjha", "Vadnagar", "Vijapur", "Visnagar"],
    "Narmada": ["Dediapada", "Nandod", "Sagbara", "Tilakwada"],
    "Navsari": ["Bansda", "Chikhli", "Gandevi", "Jalalpore", "Navsari"],
    "Panch Mahals": ["Ghoghamba", "Godhra", "Halol", "Jambughoda", "Kadana", "Kalol", "Khanpur", "Lunawada", "Morwa", "Santrampur", "Shehera"],
    "Patan": ["Chanasma", "Harij", "Patan", "Radhanpur", "Sami", "Santalpur", "Sidhpur"],
    "Porbandar": ["Kutiyana", "Porbandar", "Ranavav"],
    "Rajkot": ["Dhoraji", "Gondal", "Jamkandorna", "Jasdan", "Jetpur", "Kotda Sangani", "Lodhika", "Maliya", "Morvi", "Paddhari", "Rajkot", "Tankara", "Upleta", "Wankaner"],
    "Sabar Kantha": ["Bayad", "Bhiloda", "Dhansura", "Himatnagar", "Idar", "Khedbrahma", "Malpur", "Meghraj", "Modasa", "Prantij", "Talod", "Vadali", "Vijaynagar"],
    "Surat": ["Bardoli", "Chorasi", "Kamrej", "Mahuva", "Mandvi", "Mangrol", "Olpad", "Palsana", "Surat City", "Umarpada"],
    "Surendranagar": ["Chotila", "Chuda", "Dasada", "Dhrangadhra", "Halvad", "Lakhtar", "Limbdi", "Muli", "Sayla", "Wadhwan"],
    "Tapi": ["Nizar", "Songadh", "Uchchhal", "Valod", "Vyara"],
    "The Dangs": ["The Dangs"],
    "Vadodara": ["Chhota Udaipur", "Dabhoi", "Jetpur Pavi", "Karjan", "Kavant", "Nasvadi", "Padra", "Sankheda", "Savli", "Sinor", "Vadodara", "Vaghodia"],
    "Valsad": ["Dharampur", "Kaprada", "Pardi", "Umbergaon", "Valsad"],
    // Haryana
    "Hisar": ["Adampur", "Hansi", "Hisar", "Narnaund"],
    "Jhajjar": ["Bahadurgarh", "Beri", "Jhajjar", "Matenhail"],
    "Jind": ["Jind", "Julana", "Narwana", "Safidon"],
    "Kaithal": ["Fatehpur Pundri", "Guhla", "Kaithal"],
    "Karnal": ["Assandh", "Gharaunda", "Indri", "Karnal", "Nilokheri"],
    "Kurukshetra": ["Pehowa", "Shahbad", "Thanesar"],
    "Mahendragarh": ["Mahendragarh", "Narnaul"],
    "Mewat": ["Ferozepur Jhirka", "Nuh", "Punahana", "Taoru"],
    "Palwal": ["Hathin", "Hodal", "Palwal"],
    "Panchkula": ["Kalka", "Panchkula"],
    "Panipat": ["Israna", "Panipat", "Samalkha"],
    "Rewari": ["Bawal", "Kosli", "Rewari"],
    "Rohtak": ["Maham", "Rohtak", "Sampla"],
    "Sirsa": ["Dabwali", "Ellenabad", "Rania", "Sirsa"],
    "Sonipat": ["Ganaur", "Gohana", "Kharkhoda", "Sonipat"],
    "Yamunanagar": ["Bilaspur", "Chhachhrauli", "Jagadhri"],
    // Himachal Pradesh
    // eslint-disable-next-line
    "Bilaspur": ["Bharari", "Bilaspur Sadar", "Ghumarwin", "Jhanduta", "Naina Devi", "Namhol"],
    "Chamba": ["Bhalai", "Bhattiyat", "Brahmaur", "Chamba", "Chaurah", "Dalhousie", "Holi", "Pangi", "Saluni", "Sihunta"],
    // eslint-disable-next-line
    "Hamirpur": ["Barsar", "Bhoranj", "Dhatwal", "Galore", "Hamirpur", "Nadaun", "Tira Sujanpur"],
    "Kangra": ["Baijnath", "Baroh", "Dera Gopipur", "Dharmsala", "Dhira", "Fatehpur", "Harchakian", "Indora", "Jaisinghpur", "Jaswan", "Jawalamukhi", "Jawali", "Kangra", "Khundian", "Multhan", "Nagrota Bagwan", "Nurpur", "Palampur", "Rakkar", "Shahpur", "Thural"],
    "Kinnaur": ["Hangrang", "Kalpa", "Morang", "Nichar", "Poo", "Sangla"],
    "Kullu": ["Ani", "Banjar", "Kullu", "Manali", "Nermand", "Sainj"],
    "Lahul & Spiti": ["Lahul", "Spiti", "Udaipur"],
    "Mandi": ["Aut", "Baldwara", "Bali Chowki", "Bhadrota", "Chachyot", "Dharmpur", "Jogindarnagar", "Karsog", "Kotli", "Lad Bharol", "Mandi", "Nihri", "Padhar", "Sandhol", "Sarkaghat", "Sundarnagar", "Thunag"],
    "Shimla": ["Chaupal", "Cheta", "Chirgaon", "Dodra Kwar", "Jubbal", "Junga", "Kotkhai", "Kumharsain", "Nankhari", "Nerua", "Rampur", "Rohru", "Seoni", "Shimla Rural", "Shimla Urban", "Theog", "Tikar"],
    "Sirmaur": ["Dadahu", "Kamrau", "Nahan", "Nohra", "Pachhad", "Paonta Sahib", "Rajgarh", "Renuka", "Ronhat", "Shalai"],
    "Solan": ["Arki", "Baddi", "Darlaghat", "Kandaghat", "Kasauli", "Krishangarh", "Nalagarh", "Ramshahr", "Solan"],
    "Una": ["Amb", "Bangana", "Bharwain", "Haroli", "Una"],

    // J& K
    "Badgam": ["Beerwah", "Budgam", "Chadoora", "Charar E Shrief", "Khag", "Khansahib"],
    "Bandipore": ["Bandipora", "Gurez", "Sonawari"],
    "Baramula": ["Baramulla", "Boniyar", "Kreeri", "Pattan", "Rafiabad", "Sopore", "Tangmarg", "Uri"],
    "Doda": ["Bhaderwah", "Doda", "Gandoh", "Thathri"],
    "Ganderbal": ["Ganderbal", "Kangan", "Lar"],
    "Jammu": ["Akhnoor", "Bishnah", "Jammu", "Ranbir Singh Pora"],
    "Kargil": ["Kargil", "Sanku", "Zanskar"],
    "Kathua": ["Bani", "Bashohli", "Billawar", "Hiranagar", "Kathua"],
    "Kishtwar": ["Atholi", "Chhatroo", "Kishtwar", "Marwah"],
    "Kulgam": ["Damhal Hanjipora", "Devsar", "Kulgam"], "Kupwara": ["Handwara", "Karnah", "Kupwara"], "Leh": ["Khalsi", "Leh", "Nubra"], "Pulwama": ["Awantipora", "Pampore", "Pulwama", "Tral"], "Punch": ["Haveli", "Mandi", "Mendhar", "Surankote"], "Rajouri": ["Budhal", "Darhal", "Kalakote", "Nowshehra", "Rajauri", "Sunderbani", "Thanamandi"], "Ramban": ["Banihal", "Ramban"], "Reasi": ["Gool Gulabgarh", "Reasi"], "Samba": ["Samba"], "Shupiyan": ["Shopian"], "Srinagar": ["Srinagar North", "Srinagar South"], "Udhampur": ["Chenani", "Majalta", "Ramnagar", "Udhampur"],
    // Karnataka
    "Belgaum": ["Athni", "Belgaum", "Chikodi", "Gokak", "Hukeri", "Khanapur", "Parasgad", "Ramdurg", "Raybag Sampgaon"], "Bellary": ["Bellary", "Hadagalli", "Hagaribommanahalli", "Hospet", "Kudligi", "Sandur", "Siruguppa"], "Bidar": ["Aurad", "Basavakalyan", "Bhalki", "Bidar", "Homnabad"],
    // eslint-disable-next-line
    "Bijapur": ["Basavana Bagevadi", "Bijapur", "Indi", "Muddebihal", "Sindgi"], "Chamarajanagar": ["Chamarajanagar", "Gundlupet", "Kollegal", "Yelandur"], "Chikkaballapura": ["Bagepalli", "Chikkaballapura", "Chintamani", "Gauribidanur", "Gudibanda", "Sidlaghatta"], "Chikmagalur": ["Chikmagalur", "Kadur", "Koppa", "Mudigere", "Narasimharajapura", "Sringeri", "Tarikere"], "Chitradurga": ["Challakere", "Chitradurga", "Hiriyur", "Holalkere", "Hosdurga", "Molakalmuru"], "Dakshina Kannada": ["Bantval", "Beltangadi", "Mangalore", "Puttur", "Sulya"], "Davanagere": ["Channagiri", "Davanagere", "Harapanahalli", "Harihar", "Honnali", "Jagalur"], "Dharwad": ["Dharwad", "Hubli", "Kalghatgi", "Kundgol", "Navalgund"], "Gadag": ["Gadag", "Mundargi", "Nargund", "Ron", "Shirhatti"], "Gulbarga": ["Afzalpur", "Aland", "Chincholi", "Chitapur", "Gulbarga", "Jevargi", "Sedam"], "Hassan": ["Alur", "Arkalgud", "Arsikere", "Belur", "Channarayapatna", "Hassan", "Hole Narsipur", "Sakleshpur"], "Haveri": ["Byadgi", "Hangal", "Haveri", "Hirekerur", "Ranibennur", "Savanur", "Shiggaon"], "Kodagu": ["Madikeri", "Somvarpet", "Virajpet"], "Kolar": ["Bangarapet", "Kolar", "Malur", "Mulbagal", "Srinivaspur"], "Koppal": ["Gangawati", "Koppal", "Kushtagi", "Yelbarga"], "Mandya": ["Krishnarajpet", "Maddur", "Malavalli", "Mandya", "Nagamangala", "Pandavapura", "Shrirangapattana"], "Mysore": ["Heggadadevankote", "Hunsur", "Krishnarajanagara", "Mysore", "Nanjangud", "Piriyapatna", "Tirumakudal Narsipur"],
    "Raichur": ["Devadurga", "Lingsugur", "Manvi", "Raichur", "Sindhnur"], "Ramanagara": ["Channapatna", "Kanakapura", "Magadi", "Ramanagara"], "Shimoga": ["Bhadravati", "Hosanagara", "Sagar", "Shikarpur", "Shimoga", "Sorab", "Tirthahalli"], "Tumkur": ["Chiknayakanhalli", "Gubbi", "Koratagere", "Kunigal", "Madhugiri", "Pavagada", "Sira", "Tiptur", "Tumkur", "Turuvekere"],
    "Udupi": ["Karkal", "Kundapura", "Udupi"], "Uttara Kannada": ["Ankola", "Bhatkal", "Haliyal", "Honavar", "Karwar", "Kumta", "Mundgod", "Siddapur", "Sirsi", "Supa", "Yellapur"],
    "Yadgir": ["Shahpur", "Shorapur", "Yadgir"],
    // Kerala
    "Alappuzha": ["Ambalappuzha", "Chengannur", "Cherthala", "Karthikappally", "Kuttanad", "Mavelikkara"], "Ernakulam": ["Aluva", "Kanayannur", "Kochi", "Kothamangalam", "Kunnathunad", "Muvattupuzha", "Paravur"],
    "Idukki": ["Devikulam", "Peerumade", "Thodupuzha", "Udumbanchola"], "Kannur": ["Kannur", "Taliparamba", "Thalassery"],
    "Kasaragod": ["Hosdurg", "Kasaragod"], "Kollam": ["Karunagappally", "Kollam", "Kottarakkara", "Kunnathur", "Pathanapuram"], "Kottayam": ["Changanassery", "Kanjirappally", "Kottayam", "Meenachil", "Vaikom"], "Kozhikode": ["Kozhikode", "Quilandy", "Vadakara"], "Malappuram": ["Ernad", "Nilambur", "Perinthalmanna", "Ponnani", "Tirur", "Tirurangadi"], "Palakkad": ["Alathur", "Chittur", "Mannarkad", "Ottappalam", "Palakkad"], "Pathanamthitta": ["Adoor", "Kozhenchery", "Mallappally", "Ranni", "Thiruvalla"], "Thiruvananthapuram": ["Chirayinkeezhu", "Nedumangad", "Neyyattinkara", "Thiruvananthapuram"], "Thrissur": ["Chavakkad", "Kodungallur", "Mukundapuram", "Talappilly", "Thrissur"], "Wayanad": ["Mananthavady", "Sulthanbathery", "Vythiri"],
    // Lakshadeep
    "Lakshadweep": ["Agatti", "Amini", "Andrott", "Bitra", "Chetlat", "Kadmat", "Kalpeni", "Kavaratti", "Kiltan", "Minicoy"],
    // Madhya Pradesh
    "Alirajpur": ["Alirajpur", "Bhavra", "Jobat"],
    "Anuppur": ["Anuppur", "Jaithari", "Kotma", "Pushparajgarh"], "Ashoknagar": ["Ashoknagar", "Chanderi", "Isagarh", "Mungaoli", "Shadhora"], "Balaghat": ["Baihar", "Balaghat", "Katangi", "Khairlanji", "Kirnapur", "Lalbarra", "Lanji", "Paraswada", "Tirodi", "Waraseoni"], "Barwani": ["Anjad", "Barwani", "Niwali", "Pansemal", "Pati", "Rajpur", "Sendhwa", "Thikri", "Varla"], "Betul": ["Amla", "Athner", "Betul", "Bhainsdehi", "Chicholi", "Ghoda Dongri", "Multai", "Shahpur"], "Bhind": ["Ater", "Bhind", "Gohad", "Gormi", "Lahar", "Mehgaon", "Mihona", "Ron"], "Bhopal": ["Berasia", "Huzur"], "Burhanpur": ["Burhanpur", "Khaknar", "Nepanagar"],
    "Chhatarpur": ["Bada Malhera", "Bijawar", "Buxwaha", "Chandla", "Chhatarpur", "Gaurihar", "Ghuwara", "Laundi", "Maharajpur", "Nowgong", "Rajnagar"], "Chhindwara": ["Amarwara", "Bichhua", "Chaurai", "Chhindwara", "Harrai", "Jamai", "Mohkhed", "Pandhurna", "Parasia", "Sausar", "Tamia", "Umreth"], "Damoh": ["Batiyagarh", "Damoh", "Hatta", "Jabera", "Patera", "Patharia", "Tendukheda"], "Datia": ["Bhander", "Datia", "Indergarh", "Seondha"], "Dewas": ["Bagli", "Dewas", "Hatpiplya", "Kannod", "Khategaon", "Satwas", "Sonkatch", "Tonk Khurd"], "Dhar": ["Badnawar", "Dahi", "Dhar", "Dharampuri", "Gandhwani", "Kukshi", "Manawar", "Sardarpur"], "Dindori": ["Dindori", "Shahpura"], "Guna": ["Aron", "Bamori", "Chachaura", "Guna", "Kumbhraj", "Maksoodangarh", "Raghogarh"], "Gwalior": ["Bhitarwar", "Chinour", "Dabra", "Gwalior"], "Harda": ["Handiya", "Harda", "Khirkiya", "Rehatgaon", "Sirali", "Timarni"], "Hoshangabad": ["Babai", "Bankhedi", "Dolariya", "Hoshangabad", "Itarsi", "Pipariya", "Seoni Malwa", "Sohagpur"],
    "Indore": ["Depalpur", "Hatod", "Indore", "Mhow", "Sawer"], "Jabalpur": ["Jabalpur", "Kundam", "Majholi", "Panagar", "Patan", "Shahpura", "Sihora"], "Jhabua": ["Jhabua", "Meghnagar", "Petlawad", "Ranapur", "Thandla"], "Katni": ["Badwara", "Bahoriband", "Barhi", "Dhimarkheda", "Murwara", "Rithi", "Vijayraghavgarh"], "Khandwa": ["Harsud", "Khalwa", "Khandwa", "Pandhana", "Punasa"], "Khargone": ["Barwaha", "Bhagwanpura", "Bhikangaon", "Gogaon", "Jhiranya", "Kasrawad", "Khargone", "Maheshwar", "Segaon"],
    "Mandla": ["Bichhiya", "Ghughari", "Mandla", "Nainpur", "Narayanganj", "Niwas"], "Mandsaur": ["Bhanpura", "Daloda", "Garoth", "Malhargarh", "Mandsaur", "Shamgarh", "Sitamau", "Suwasara"],
    "Morena": ["Ambah", "Joura", "Kailaras", "Morena", "Porsa", "Sabalgarh"], "Narsimhapur": ["Gadarwara", "Gotegaon", "Kareli", "Narsimhapur", "Tendukheda"], "Neemuch": ["Jawad", "Jiran", "Manasa", "Neemuch", "Singoli"], "Panna": ["Ajaigarh", "Amanganj", "Devendranagar", "Gunnor", "Panna", "Pawai", "Raipura", "Shahnagar"], "Raisen": ["Badi", "Baraily", "Begamganj", "Gairatganj", "Goharganj", "Raisen", "Silwani", "Udaipura"], "Rajgarh": ["Biaora", "Jirapur", "Khilchipur", "Narsinghgarh", "Pachore", "Rajgarh", "Sarangpur"], "Ratlam": ["Alot", "Bajna", "Jaora", "Piploda", "Ratlam", "Rawti", "Sailana", "Tal"], "Rewa": ["Gurh", "Hanumana", "Huzur", "Jawa", "Mangawan", "Mauganj", "Naigarhi", "Raipur Karchuliyan", "Semaria", "Sirmour", "Teonthar"], "Sagar": ["Banda", "Bina", "Deori", "Garhakota", "Kesli", "Khurai", "Malthon", "Rahatgarh", "Rehli", "Sagar", "Shahgarh"], "Satna": ["Amarpatan", "Birsinghpur", "Kotar", "Maihar", "Majhgawan", "Nagod", "Raghurajnagar", "Ramnagar", "Rampur Baghelan", "Unchahara"], "Sehore": ["Ashta", "Budni", "Ichhawar", "Jawar", "Nasrullaganj", "Rehti", "Sehore", "Shyampur"], "Seoni": ["Barghat", "Chhapara", "Dhanora", "Ghansaur", "Keolari", "Kurai", "Lakhnadon", "Seoni"], "Shahdol": ["Beohari", "Jaisinghnagar", "Jaitpur", "Sohagpur"], "Shajapur": ["Agar", "Badod", "Gulana", "Kalapipal", "Moman Badodiya", "Nalkheda", "Shajapur", "Shujalpur", "Susner"], "Sheopur": ["Badoda", "Beerpur", "Karahal", "Sheopur", "Vijaypur"], "Shivpuri": ["Badarwas", "Karera", "Khaniyadhana", "Kolaras", "Narwar", "Pichhore", "Pohri", "Shivpuri"], "Sidhi": ["Churhat", "Gopadbanas", "Kusmi", "Majhauli", "Rampur Naikin", "Sihawal"], "Singrauli": ["Chitrangi", "Deosar", "Singrauli"], "Tikamgarh": ["Baldeogarh", "Jatara", "Khargapur", "Mohangarh", "Niwari", "Orchha", "Palera", "Prithvipur", "Tikamgarh"],
    "Ujjain": ["Badnagar", "Ghatiya", "Khacharod", "Mahidpur", "Nagda", "Tarana", "Ujjain"], "Umaria": ["Bandhogarh", "Chandia", "Manpur", "Nowrozabad", "Pali"], "Vidisha": ["Basoda", "Gulabganj", "Gyaraspur", "Kurwai", "Lateri", "Nateran", "Shamshabad", "Sironj", "Tyonda", "Vidisha"],


    // Maharastra
    "Ahmadnagar": ["Akola", "Jamkhed", "Karjat", "Kopargaon", "Nagar", "Nevasa", "Parner", "Pathardi", "Rahta", "Rahuri", "Sangamner", "Shevgaon", "Shrigonda", "Shrirampur"], "Akola": ["Akola", "Akot", "Balapur", "Barshitakli", "Murtijapur", "Patur", "Telhara"], "Amravati": ["Achalpur", "Amravati", "Anjangaon Surji", "Bhatkuli", "Chandur Railway", "Chandurbazar", "Chikhaldara", "Daryapur", "Dhamangaon Railway", "Dharni", "Morshi", "Nandgaon Khandeshwar", "Teosa", "Warud"], "Aurangabad": ["Aurangabad", "Gangapur", "Kannad", "Khuldabad", "Paithan", "Phulambri", "Sillod", "Soegaon", "Vaijapur"],
    "Bhandara": ["Bhandara", "Lakhandur", "Lakhani", "Mohadi", "Pauni", "Sakoli", "Tumsar"], "Bid": ["Ambejogai", "Ashti", "Bid", "Dharur", "Georai", "Kaij", "Manjlegaon", "Parli", "Patoda", "Shirur", "Wadwani"],
    "Buldana": ["Buldana", "Chikhli", "Deolgaon Raja", "Jalgaon", "Khamgaon", "Lonar", "Malkapur", "Mehkar", "Motala", "Nandura", "Sangrampur", "Shegaon", "Sindkhed Raja"], "Chandrapur": ["Ballarpur", "Bhadravati", "Brahmapuri", "Chandrapur", "Chimur", "Gondpipri", "Jiwati", "Korpana", "Mul", "Nagbhir", "Pombhurna", "Rajura", "Sawali", "Sindewahi", "Warora"], "Dhule": ["Dhule", "Sakri", "Shirpur", "Sindkhede"], "Gadchiroli": ["Aheri", "Armori", "Bhamragad", "Chamorshi", "Desaiganj", "Dhanora", "Etapalli", "Gadchiroli", "Korchi", "Kurkheda", "Mulchera", "Sironcha"],
    "Gondiya": ["Amgaon", "Arjuni Morgaon", "Deori", "Gondiya", "Goregaon", "Sadak Arjuni", "Salekasa", "Tirora"],
    "Hingoli": ["Aundha", "Basmath", "Hingoli", "Kalamnuri", "Sengaon"], "Jalgaon": ["Amalner", "Bhadgaon", "Bhusawal", "Bodvad", "Chalisgaon", "Chopda", "Dharangaon", "Erandol", "Jalgaon", "Jamner", "Muktainagar", "Pachora", "Parola", "Raver", "Yawal"], "Jalna": ["Ambad", "Badnapur", "Bhokardan", "Ghansawangi", "Jafferabad", "Jalna", "Mantha", "Partur"], "Kolhapur": ["Ajra", "Bavda", "Bhudargad", "Chandgad", "Gadhinglaj", "Hatkanangle", "Kagal", "Karvir", "Panhala", "Radhanagari", "Shahuwadi", "Shirol"], "Latur": ["Ahmadpur", "Ausa", "Chakur", "Deoni", "Jalkot", "Latur", "Nilanga", "Renapur", "Shirur Anantpal", "Udgir"],
    "Mumbai": ["Mumbai",],
    "Mumbai Suburban": ["Mumbai Suburban"], "Nagpur": ["Bhiwapur", "Hingna", "Kalameshwar", "Kamptee", "Katol", "Kuhi", "Mauda", "Nagpur Rural", "Nagpur Urban", "Narkhed", "Parseoni", "Ramtek", "Savner", "Umred"], "Nanded": ["Ardhapur", "Bhokar", "Biloli", "Deglur", "Dharmabad", "Hadgaon", "Himayatnagar", "Kandhar", "Kinwat", "Loha", "Mahoor", "Mudkhed", "Mukhed", "Naigaon", "Nanded", "Umri"], "Nandurbar": ["Akkalkuwa", "Akrani", "Nandurbar", "Nawapur", "Shahade", "Talode"], "Nashik": ["Baglan", "Chandvad", "Deola", "Dindori", "Igatpuri", "Kalwan", "Malegaon", "Nandgaon", "Nashik", "Niphad", "Peint", "Sinnar", "Surgana", "Trimbakeshwar", "Yevla"], "Osmanabad": ["Bhum", "Kalamb", "Lohara", "Osmanabad", "Paranda", "Tuljapur", "Umarga", "Washi"], "Parbhani": ["Gangakhed", "Jintur", "Manwath", "Palam", "Parbhani", "Pathri", "Purna", "Sailu", "Sonpeth"], "Pune": ["Ambegaon", "Baramati", "Bhor", "Daund", "Haveli", "Indapur", "Junnar", "Khed", "Mawal", "Mulshi", "Pune City", "Purandhar", "Shirur", "Velhe"],
    // eslint-disable-next-line
    "Raigarh": ["Alibag", "Karjat", "Khalapur", "Mahad", "Mangaon", "Mhasla", "Murud", "Panvel", "Pen", "Poladpur", "Roha", "Shrivardhan", "Sudhagad", "Tala", "Uran"], "Ratnagiri": ["Chiplun", "Dapoli", "Guhagar", "Khed", "Lanja", "Mandangad", "Rajapur", "Ratnagiri", "Sangameshwar"], "Sangli": ["Atpadi", "Jat", "Kadegaon", "Kavathemahankal", "Khanapur", "Miraj", "Palus", "Shirala", "Tasgaon", "Walwa"], "Satara": ["Jaoli", "Karad", "Khandala", "Khatav", "Koregaon", "Mahabaleshwar", "Man", "Patan", "Phaltan", "Satara", "Wai"], "Sindhudurg": ["Devgad", "Dodamarg", "Kankavli", "Kudal", "Malwan", "Sawantwadi", "Vaibhavvadi", "Vengurla"], "Solapur": ["Akkalkot", "Barshi", "Karmala", "Madha", "Malshiras", "Mangalvedhe", "Mohol", "Pandharpur", "Sangole", "Solapur North", "Solapur South"], "Thane": ["Ambarnath", "Bhiwandi", "Dahanu", "Jawhar", "Kalyan", "Mokhada", "Murbad", "Palghar", "Shahapur", "Talasari", "Thane", "Ulhasnagar", "Vada", "Vasai", "Vikramgad"], "Wardha": ["Arvi", "Ashti", "Deoli", "Hinganghat", "Karanja", "Samudrapur", "Seloo", "Wardha"], "Washim": ["Karanja", "Malegaon", "Mangrulpir", "Manora", "Risod", "Washim"], "Yavatmal": ["Arni", "Babulgaon", "Darwha", "Digras", "Ghatanji", "Kalamb", "Kelapur", "Mahagaon", "Maregaon", "Ner", "Pusad", "Ralegaon", "Umarkhed", "Wani", "Yavatmal", "Zari Jamani"],

    // Manipur
    "Bishnupur": ["Bishnupur", "Moirang", "Nambol"], "Chandel": ["Chakpikarong", "Chandel", "Machi", "Tengnoupal"], "Churachandpur": ["Churachandpur", "Churachandpur North", "Singngat", "Thanlon", "Tipaimukh"], "Imphal East": ["Jiribam", "Keirao Bitra", "Porompat", "Sawombung"],
    "Imphal West": ["Lamphelpat", "Lamshang", "Patsoi", "Wangoi"],
    "Senapati": ["Mao Maram", "Paomata", "Purul", "Sadar Hills East", "Sadar Hills West", "Saitu Gamphazol"], "Tamenglong": ["Nungba", "Tamenglong", "Tamenglong North", "Tamenglong West"], "Thoubal": ["Kakching", "Lilong", "Thoubal"],
    "Ukhrul": ["Kamjong Chassad", "Phungyar Phaisat", "Ukhrul North", "Ukhrul South", "Ukhurl Central"],

    // Meghalaya
    "East Garo Hills": ["Dambo Rongjeng", "Kharkutta", "Resubelpara", "Samanda", "Songsak"],
    "East Khasi Hills": ["Khatarshnong Laitkroh", "Mawkynrew", "Mawphlang", "Mawryngkneng", "Mawsynram", "Mylliem", "Pynursla", "Shella Bholaganj"],
    "Jaintia Hills": ["Amlarem", "Khliehriat", "Laskein", "Saipung", "Thadlaskein"], "Ribhoi": ["Jirang", "Umling", "Umsning"],
    "South Garo Hills": ["Baghmara", "Chokpot", "Gasuapara", "Rongara"],
    "West Garo Hills": ["Betasing", "Dadenggiri", "Dalu", "Gambegre", "Rongram", "Selsella", "Tikrikilla", "Zikzak"],
    "West Khasi Hills": ["Mairang", "Mawkyrwat", "Mawshynrut", "Mawthadraishan", "Nongstoin", "Ranikor"],

    // Mizoram
    "Aizawl": ["Aibawk", "Darlawn", "Phullen", "Thingsulthliah", "Tlangnuam"], "Champhai": ["Champhai", "East Lungdar", "Khawbung", "Khawzawl", "Ngopa"], "Kolasib": ["Bilkhawthlir", "N Thingdawl", "Tlangnuam"], "Lawngtlai": ["Hnahthial", "Lunglei", "Lungsen", "West Bunghmun"], "Lunglei": ["Hnahthial", "Lunglei", "Lungsen", "West Bunghmun", "West Bunghmun"], "Mamit": ["Reiek", "West Phaileng", "Zawlnuam"], "Saiha": ["Saiha", "Tuipang"], "Serchhip": ["East Lungdar", "Serchhip", "Thingsulthliah"],

    // Nagaland
    "Dimapur": ["Aquqhnaqua", "Chumukedima", "Dhansiripar", "Dimapur       Sadar", "Kuhoboto", "Medziphema", "Nihokhu", "Niuland"], "Kiphire": ["Amahator", "Khongsa", "Kiphire Sadar", "Kiusam", "Longmatra", "Pungro", "Seyochung", "Sitimi"], "Kohima": ["Botsa", "Chiephobozou", "Jakhama", "Kezocha", "Kohima Sadar", "Sechu Zubza", "Tseminyu", "Tsogin"],
    "Longleng": ["Longleng", "Namsang", "Sakshi", "Tamlu", "Yongnyah"], "Mokokchung": ["Alongkima", "Changtongya", "Chuchuyimlang", "Kubolong", "Longchem", "Mangkolemba", "Merangmen", "Ongpangkong", "Tuli"], "Mon": ["Aboi", "Angjangyang", "Chen", "Hunta", "Longshen", "Mon Sadar", "Monyakshu", "Mopong", "Naginimora", "Phomching", "Shangnyu", "Tizit", "Tobu", "Wakching"], "Peren": ["Athibung", "Jalukie", "Kebai Khelma", "Nsong", "Pedi", "Peren", "Tening"], "Phek": ["Chetheba", "Chizami", "Chozuba", "Khezhakeno", "Khuza", "Meluri", "Pfutsero", "Phek Sadar", "Phokhungri", "Phor", "Razieba", "Sakraba", "Sekruzu", "Zuketsa"], "Tuensang": ["Chare", "Chessore", "Chingmei", "Longkhim", "Mangko", "Ngoungchung", "Nokhu", "Noklak", "Noksen", "Panso", "Sangsangnyu", "Shamator", "Sotokur", "Thonoknyu", "Tsurungto", "Tuensang Sadar"], "Wokha": ["Aitepyong", "Baghty", "Bhandari", "Changpang", "Chukitong", "Englan", "Lotsu", "Ralan", "Sanis", "Sungro", "Wokha Sadar", "Wozhuro"], "Zunheboto": ["Aghunato", "Akuhaito", "Akuluto", "Asuto", "Atoizu", "Ghathashi", "Pughoboto", "Saptiqa", "Satakha", "Satoi", "Suruhuto", "V K", "Zunheboto Sadar"],


    // Odisa
    "Anugul": ["Anugul", "Athmallik", "Banarpal", "Bantala", "Bhusan Steel Limited", "Bikrampur", "Chhendipada", "Colliery", "Handapa", "Industrial", "Jarapada", "Kaniha", "Khamar", "Kiakata", "Kishorenagar", "N T P C", "NALCO", "Palalahada", "Purunakot", "Rengali Damsite", "Samal Barrage", "Talcher Sadar", "Thakurgarh"], "Balangir": ["Balangir", "Bangomunda", "Belpara", "Kantabanji", "Khaprakhol", "Loisinga", "Patnagarh", "Saintala", "Sindhekela", "Titlagarh", "Turekela", "Tushura"], "Baleshwar": ["Balaramgadi Marine", "Baleshwar", "Baleshwar Sadar", "Baliapal", "Bampada", "Basta", "Berhampur", "Bhograi", "Chandipur", "Jaleswar", "Kamarda", "Khaira", "Nilagiri", "Oupada", "Raibania", "Remuna", "Rupsa", "Sahadevkhunta", "Similia", "Singla", "Soro"], "Bargarh": ["Ambabhona", "Attabira", "Barapali", "Bargarh", "Bargarh Sadar", "Bhatli", "Bheden", "Bijepur", "BurdenP S", "Gaisilet", "Jharbandha", "Melchhamunda", "Padmapur", "Paikamal", "Sohela"],
    "Baudh": ["Baudh Sadar", "Baunsuni", "Harbhanga", "Kantamal", "Manamunda", "Puruna Katak"], "Bhadrak": ["Agarpada", "Bansada", "Bant", "Basudebpur", "Bhadrak Rural", "Bhandari Pokhari", "Chandabali", "Dhamanagar", "Dhamara Marine", "Dhusuri", "Naikanidihi", "Tihidi"], "Cuttack": ["Athagad", "Badamba", "Baidyeswar", "Banki", "Barang", "C R R I", "Choudwar", "Cuttack P S", "Cuttack Sadar", "Gobindpur", "Gurudijhatia", "Jagatpur", "Kandarpur", "Kanpur", "Khuntuni", "Kishannagar", "Mahanga", "Narasinghpur", "Nemalo", "Niali", "Nischintakoili", "Olatapur", "Salepur", "Tangi", "Tigiria"], "Debagarh": ["Barkot", "Debagarh", "Kundheigola", "Reamal"],
    "Dhenkanal": ["Balimi", "Bhuban", "Bhusan Steel Limited", "Dhenkanal Sadar", "Gandia", "Hindol", "Kamakshyanagar", "Kankadahad", "Motunga", "Nihalprasad", "Parajang", "Rasol", "Tumusingha"], "Gajapati": ["Adva", "Garabandha", "Gurandi", "Kashinagara", "Mohana", "Parlakhemundi", "R Udaygiri", "Ramagiri", "Rayagada", "Serango"],
    "Ganjam": ["ARJYAPALLI MARINE", "ASIKA", "BADAGADA", "BHANJANAGAR", "Brahmapur", "BRAHMAPUR SADAR", "BUGUDA", "CHAMAKHANDI", "CHHATRAPUR", "DHARAKOTE", "DIGAPAHANDI", "GANGAPUR"], "Jagatsinghapur": ["Abhyachandpur", "Balikuda", "Biridi", "Ersama", "Jagatsinghapur", "Kujang", "Naugaon", "Paradeep Lock", "Paradip", "Tirtol"],
    "Jajapur": ["Badachana", "Balichandrapur", "Bari Ramachandrapur", "Binjharpur", "Dharmasala", "Jajapur", "Jajapur Road", "Jajpur Sadar", "Jakhapura", "Jenapur", "Kaliapani", "Kalinganagar", "Korai", "Kuakhia", "Mangalpur", "Panikoili", "Sukinda", "Tomka"], "Jharsuguda": ["Badmal", "Banaharapali", "Belpahar", "Brajarajnagar", "Jharsuguda", "Kolabira", "Laikera", "Lakhanpur", "Orient", "Rengali"], "Kalahandi": ["Biswanathpur", "Dharamgarh", "Golamunda", "Jayapatna", "Junagarh", "Kegaon", "Kesinga", "Kokasara", "Lanjigarh", "Madanpur Rampur", "Narala", "Sadar", "Thuamul Rampur"], "Kandhamal": ["Baliguda", "Belaghar", "Brahmanigaon", "Chakapada", "Daringbadi", "G Udayagiri", "Gochhapada", "Khajuripada", "Kotagarh", "Nuagaon", "Phiringia", "Phulabani", "Phulabani Town", "Raikia", "Sarangagarh", "Tikabali", "Tumudibandha"],
    "Kendrapara": ["Aali", "Derabish", "Jamboo Marine", "Kendrapara", "Kendrapara Sadar", "Mahakalapada", "Marsaghai", "Nikirai", "Patkura", "Pattamundai", "Rajkanika", "Rajnagar"],
    "Kendujhar": ["Anandapur", "Bamebari", "Barbil", "Baria", "Bolani", "Champua", "Daitari", "Ghasipura", "Ghatgaon", "Harichandanpur", "Jhumpura", "Joda", "Kanjipani", "Kendujhar Sadar", "Kendujhar Town", "Nandipada", "Nayakote", "Pandapara", "Patana", "Rugudi", "Sainkul", "Soso", "Telkoi", "Turumunga"],
    "Khordha": ["Airfield", "Balianta", "Balipatna", "Balugaon", "Banapur", "Begunia", "Bhubaneswar", "Bolagad", "Chandaka", "Jankia", "Jatani", "Khandagiri", "Khordha", "Khordha Sadar", "LINGARAJ", "Mancheswar", "Nandankanan", "Nirakarpur", "Saheednagar", "Tamando", "Tangi", "Uttara P S"],
    "Koraput": ["Bandhugaon", "Bhairabsingipur", "Boipariguda", "Boriguma", "Damonjodi", "Dasamantapur", "Jeypore", "Kakiriguma", "Koraput", "Koraput Town", "Kotiya", "Kotpad", "Kundura", "Lakshmipur", "Machh kund", "Nandapur", "Narayanpatana", "Padua", "Pottangi", "Similiguda", "Sunabeda"],
    "Malkangiri": ["Chitrakonda", "Jodamba", "Kalimela", "M V 79", "Malkangiri", "Mathili", "Motu", "Mudulipada", "Orkel", "Paparmetla", "Podia"],
    "Mayurbhanj": ["Badampahar", "Bahalda", "Baisinga", "Bangiriposi", "Baripada", "Baripada Sadar", "Baripada Town", "Barsahi", "Betanati", "Bisoi", "Chandua", "Ghagarbeda", "Gorumahisani", "Jamda", "Jashipur", "Jharpokharia", "Kaptipada", "Karanjia", "Khunta", "Koliana", "Mahuldiha", "Muruda", "Rairangpur", "Rairangpur Town", "Raruan", "Rasagobindapur", "Sharata", "Suliapada", "Thakurmunda", "Tiring", "Udala"],
    "Nabarangapur": ["Chandahandi", "Dabugan", "Jharigan", "Khatiguda", "Kodinga", "Kosagumuda", "Kundei", "Nabarangapur P S", "Paparahandi", "Raighar", "Tentulikhunti", "Umarkote"],
    "Nayagarh": ["Banigochha", "Dasapalla", "Fategarh", "Gania", "Itamati", "Khandapada", "Nayagarh", "Nayagarh Sadar", "Nuagaon", "Odagaon", "Ranapur", "Sarankul"],
    "Nuapada": ["BODEN", "JONK", "KHARIAR", "KOMNA", "NUAPADA", "SINAPALI"],
    "Puri": ["Astaranga", "Brahmagiri", "Chandanpur", "Delanga", "Gadisagada", "Gop", "Kakatpur", "Konark", "Krushna Prasad", "Nimapada", "Pipili", "Puri", "Ramachandi", "Sadar", "Satyabadi"],
    "Rayagada": ["Ambadala", "Andirakanch", "Bishamakatak", "Chandrapur", "Doraguda", "Gudari", "Gunupur", "Kalyanasingpur", "Kashipur", "Muniguda", "Padmapur", "Puttasing", "Rayagada", "Seskhal", "Tikiri"],
    "Sambalpur": ["Ainthapali", "Burla", "Charamal", "Dhama", "Dhanupali", "Govindpur", "Hirakud", "Jamankira", "Jujomura", "Katarbaga", "Kisinda", "Kochinda", "Mahulpalli", "Naktideul", "Rairakhol", "Rengali", "Sadar", "Sambalpur", "Sasan", "Thelkoloi"],
    "Subarnapur": ["Binika", "Biramaharajpur", "Dunguripali", "Rampur", "Sonapur", "Subalaya", "Tarbha", "Ulunda"],
    "Sundargarh": ["Banei", "Baragaon", "Bhasma", "Biramitrapur", "Bisra", "Bondamunda", "Brahmani Tarang", "Chandiposh", "Dharuadihi", "Gurundia", "Hatibari", "Hemgir", "Kamarposh Balang", "Kinjirkela", "Koida", "Kutra", "Lahunipara", "Lathikata", "Lephripara", "Mahulapada", "Raghunathapali", "Raiboga", "Rajagangapur", "Raurkela", "Raurkela P S", "Sundargarh", "Sundargarh Town", "Talasara", "Tangarapali", "Tikaetpali"].concat,



    // Pondicherry

    "Karaikal": ["Karaikal Taluk", "Thirunallar Taluk"],
    "Mahe": ["Mahe Taluk"],
    "Puducherry": ["Bahour Taluk", "Ozhukarai Taluk", "Puducherry Taluk", "Villianur Taluk"], "Yanam": ["Yanam Taluk"],

    //Punjab

    "Amritsar": ["Ajnala", "Amritsar I", "Amritsar II", "Baba Bakala"], "Barnala": ["Barnala", "Tapa"], "Bathinda": ["Bathinda", "Rampura Phul", "Talwandi Sabo"], "Faridkot": ["Faridkot", "Jaitu"], "Fatehgarh Sahib": ["Amloh", "Bassi Pathana", "Fatehgarh Sahib", "Khamanon"], "Firozpur": ["Abohar", "Fazilka", "Firozpur", "Jalalabad", "Zira"], "Gurdaspur": ["Batala", "Dera Baba Nanak", "Dhar Kalan", "Gurdaspur", "Pathankot"], "Hoshiarpur": ["Dasua", "Garhshankar", "Hoshiarpur", "Mukerian"], "Jalandhar": ["Jalandhar I", "Jalandhar II", "Nakodar", "Phillaur", "Shahkot"], "Kapurthala": ["Bhulath", "Kapurthala", "Phagwara", "Sultanpur Lodhi"], "Ludhiana": ["Jagraon", "Khanna", "Ludhiana East", "Ludhiana West", "Payal", "Raikot", "Samrala"], "Mansa": ["Budhlada", "Mansa", "Sardulgarh"], "Moga": ["Bagha Purana", "Moga", "Nihal Singhwala"], "Muktsar": ["Gidderbaha", "Malout", "Muktsar"], "Patiala": ["Nabha", "Patiala", "Patran", "Rajpura", "Samana"], "Rupnagar": ["Anandpur Sahib", "Chamkaur Sahib", "Nangal", "Rupnagar"], "Sahibzada Ajit Singh Nagar": ["Dera Bassi", "Kharar", "SAS Nagar"], "Sangrur": ["Dhuri", "Lehra", "Malerkotla", "Moonak", "Sangrur", "Sunam"], "Shahid Bhagat Singh Nagar": ["Balachaur", "Nawanshahr"], "Tarn Taran": ["Khadur Sahib", "Patti", "Tarn Taran"],



    "Ajmer": ["Ajmer", "Beawar", "Bhinay", "Kekri", "Kishangarh", "Masuda", "Nasirabad", "Peesangan", "Sarwar"],
    "Alwar": ["Alwar", "Bansur", "Behror", "Kathumar", "Kishangarh Bas", "Kotkasim", "Lachhmangarh", "Mandawar", "Rajgarh", "Ramgarh", "Thanagazi", "Tijara"], "Banswara": ["Bagidora", "Banswara", "Garhi", "Ghatol", "Kushalgarh"], "Baran": ["Antah", "Atru", "Baran", "Chhabra", "Chhipabarod", "Kishanganj", "Mangrol", "Shahbad"], "Barmer": ["Barmer", "Baytoo", "Chohtan", "Gudha Malani", "Pachpadra", "Ramsar", "Sheo", "Siwana"], "Bharatpur": ["Bayana", "Bharatpur", "Deeg", "Kaman", "Kumher", "Nadbai", "Nagar", "Pahari", "Rupbas", "Weir"], "Bhilwara": ["Asind", "Banera", "Beejoliya", "Bhilwara", "Hurda", "Jahazpur", "Kotri", "Mandal", "Mandalgarh", "Raipur", "Sahara", "Shahpura"], "Bikaner": ["Bikaner", "Chhatargarh", "Khajuwala", "Kolayat", "Lunkaransar", "Nokha", "Poogal", "Sridungargarh"],
    "Bundi": ["Bundi", "Hindoli", "Indragarh", "Keshoraipatan", "Nainwa"],
    "Chittaurgarh": ["Bari Sadri", "Begun", "Bhadesar", "Chittaurgarh", "Dungla", "Gangrar", "Kapasan", "Nimbahera", "Rashmi", "Rawatbhata"],
    "Churu": ["Churu", "Rajgarh", "Ratangarh", "Sardarshahar", "Sujangarh", "Taranagar"], "Dausa": ["Baswa", "Dausa", "Lalsot", "Mahwa", "Sikrai"], "Dhaulpur": ["Bari", "Baseri", "Dhaulpur", "Rajakhera", "Sepau"], "Dungarpur": ["Aspur", "Dungarpur", "Sagwara", "Simalwara"], "Jaipur": ["Amber", "Bassi", "Chaksu", "Chomu", "Jaipur", "Jamwa Ramgarh", "Kotputli", "Mauzamabad", "Phagi", "Phulera", "Sanganer", "Shahpura", "Viratnagar"], "Jaisalmer": ["Fatehgarh", "Jaisalmer", "Pokaran"], "Jalor": ["Ahore", "Bagora", "Bhinmal", "Jalor", "Raniwara", "Sanchore", "Sayla"], "Jhalawar": ["Aklera", "Gangdhar", "Jhalrapatan", "Khanpur", "Manohar Thana", "Pachpahar", "Pirawa"], "Jhunjhunun": ["Buhana", "Chirawa", "Jhunjhunun", "Khetri", "Nawalgarh", "Udaipurwati"], "Jodhpur": ["Bhopalgarh", "Bilara", "Jodhpur", "Luni", "Osian", "Phalodi", "Shergarh"], "Karauli": ["Hindaun", "Karauli", "Mandrail", "Nadoti", "Sapotra", "Todabhim"], "Kota": ["Digod", "Ladpura", "Pipalda", "Ramganj Mandi", "Sangod"], "Nagaur": ["Degana", "Didwana", "Jayal", "Kheenvsar", "Ladnu", "Makrana", "Merta", "Nagaur", "Nawa", "Parbatsar"],
    "Pali": ["Bali", "Desuri", "Jaitaran", "Marwar Junction", "Pali", "Raipur", "Rohat", "Sojat", "Sumerpur"],
    // eslint-disable-next-line
    "Pratapgarh": ["Arnod", "Chhoti Sadri", "Dhariawad", "Peepalkhoont", "Pratapgarh"], "Rajsamand": ["Amet", "Bhim", "Deogarh", "Kumbhalgarh", "Nathdwara", "Railmagra", "Rajsamand"], "Sawai Madhopur": ["Bamanwas", "Bonli", "Chauth Ka Barwara", "Gangapur", "Khandar", "Malarna Doongar", "Sawai Madhopur"],
    "Sikar": ["Danta Ramgarh", "Fatehpur", "Lachhmangarh", "Neem Ka Thana", "Sikar", "Sri Madhopur"], "Sirohi": ["Abu Road", "Pindwara", "Reodar", "Sheoganj", "Sirohi"], "Tonk": ["Deoli", "Malpura", "Niwai", "Peeplu", "Todaraisingh", "Tonk", "Uniara"], "Udaipur": ["Girwa", "Gogunda", "Jhadol", "Kherwara", "Kotra", "Lasadiya", "Mavli", "Rishabhdeo", "Salumbar", "Sarada", "Vallabhnagar"],

    //Sikkim
    "East District": ["Gangtok", "Pakyong", "Rongli"],
    "North District": ["Chungthang", "Mangan"],
    "South District": ["Namchi", "Ravong"],
    "West District": ["Gyalshing", "Soreng"],

    //Tamil Nadu
    "Ariyalur": ["Ariyalur", "Sendurai", "Udayarpalayam"],
    "Chennai": ["Chennai"],
    "Coimbatore": ["Coimbatore North", "Coimbatore South", "Mettupalayam", "Pollachi", "Sulur", "Valparai"], "Cuddalore": ["Chidambaram", "Cuddalore", "Kattumannarkoil", "Kurinjipadi", "Panruti", "Tittakudi", "Virudhachalam"],
    "Dharmapuri": ["Dharmapuri", "Harur", "Palakkodu", "Pappireddipatti", "Pennagaram"], "Dindigul": ["Attur", "Dindigul", "Kodaikanal", "Natham", "Nilakkottai", "Oddanchatram", "Palani", "Vedasandur"],
    "Erode": ["Bhavani", "Erode", "Gobichettipalayam", "Perundurai", "Sathyamangalam"], "Kancheepuram": ["Alandur", "Chengalpattu", "Cheyyur", "Kancheepuram", "Maduranthakam", "Sholinganallur", "Sriperumbudur", "Tambaram", "Tirukalukundram", "Uthiramerur"], "Kanniyakumari": ["Agastheeswaram", "Kalkulam", "Thovala", "Vilavancode"], "Karur": ["Aravakurichi", "Kadavur", "Karur", "Krishnarayapuram", "Kulithalai"], "Krishnagiri": ["Denkanikottai", "Hosur", "Krishnagiri", "Pochampalli", "Uthangarai"],
    "Madurai": ["Madurai North", "Madurai South", "Melur", "Peraiyur", "Thirumangalam", "Usilampatti", "Vadipatti"], "Nagapattinam": ["Kilvelur", "Kuthalam", "Mayiladuthurai", "Nagapattinam", "Sirkali", "Tharangambadi", "Thirukkuvalai", "Vedaranyam"],
    "Namakkal": ["Namakkal", "Paramathi Velur", "Rasipuram", "Tiruchengode"], "Perambalur": ["Kunnam", "Perambalur", "Veppanthattai"], "Pudukkottai": ["Alangudi", "Aranthangi", "Avudayarkoil", "Gandarvakkottai", "Iluppur", "Karambakudi", "Kulathur", "Manamelkudi", "Ponnamaravathi", "Pudukkottai", "Thirumayam"], "Ramanathapuram": ["Kadaladi", "Kamuthi", "Mudukulathur", "Paramakudi", "Ramanathapuram", "Rameswaram", "Tiruvadanai"], "Salem": ["Attur", "Edappadi", "Gangavalli", "Mettur", "Omalur", "Salem", "Sankari", "Vazhapadi", "Yercaud"],
    "Sivaganga": ["Devakottai", "Ilayangudi", "Karaikkudi", "Manamadurai", "Sivaganga", "Tirupathur"], "Thanjavur": ["Kumbakonam", "Orathanadu", "Papanasam", "Pattukkottai", "Peravurani", "Thanjavur", "Thiruvaiyaru", "Thiruvidaimarudur"],
    "The Nilgiris": ["Coonoor", "Gudalur", "Kotagiri", "Kundah", "Panthalur", "Udhagamandalam"], "Theni": ["Andipatti", "Bodinayakanur", "Periyakulam", "Theni", "Uthamapalayam"], "Thiruvallur": ["Ambattur", "Gummidipoondi", "Mathavaram", "Pallipattu", "Ponneri", "Poonamallee", "Thiruvallur", "Tiruttani", "Uthukkottai"], "Thiruvarur": ["Kodavasal", "Mannargudi", "Nannilam", "Needamangalam", "Thiruthuraipoondi", "Thiruvarur", "Valangaiman"], "Thoothukkudi": ["Ettayapuram", "Kovilpatti", "Ottapidaram", "Sathankulam", "Srivaikuntam", "Thoothukkudi", "Tiruchendur", "Vilathikulam"], "Tiruchirappalli": ["Lalgudi", "Manachanallur", "Manapparai", "Musiri", "Srirangam", "Thiruverumbur", "Thottiyam", "Thuraiyur", "Tiruchirappalli"], "Tirunelveli": ["Alangulam", "Ambasamudram", "Nanguneri", "Palayamkottai", "Radhapuram", "Sankarankoil", "Shenkottai", "Sivagiri", "Tenkasi", "Tirunelveli", "Veerakeralamputhur"], "Tiruppur": ["Avanashi", "Dharapuram", "Kangeyam", "Madathukulam", "Palladam", "Tiruppur", "Udumalaipettai"], "Tiruvannamalai": ["Arani", "Chengam", "Cheyyar", "Polur", "THANDRAMPET", "Tiruvannamalai", "Vandavasi"], "Vellore": ["Ambur", "Arakonam", "Arcot", "Gudiyatham", "Katpadi", "Tirupathur", "Vaniyambadi", "Vellore", "Wallajah"], "Viluppuram": ["Gingee", "Kallakkurichi", "Sankarapuram", "Tindivanam", "Tirukkoyilur", "Ulundurpettai", "Vanur", "Viluppuram"], "Virudhunagar": ["Aruppukkottai", "Kariapatti", "Rajapalayam", "Sattur", "Sivakasi", "Srivilliputhur", "Tiruchuli", "Virudhunagar"],



    //Telangana
    "Adilabad": ["Adilabad", "Asifabad", "Bazarhathnoor", "Bejjur", "Bela", "Bellampalle", "Bhainsa", "Bhimini", "Boath", "Chennur", "Dahegaon", "Dandepalle", "Dilawarpur", "Gudihathnoor", "Ichoda", "Inderavelly", "Jainad", "Jainoor", "Jaipur", "Jannaram", "Kaddam", "Kagaznagar", "Kasipet", "Kerameri", "Khanapur", "Kotapalle", "Kouthala", "Kubeer", "Kuntala", "Laxmanchanda", "Lokeswaram", "Luxettipet", "Mamda", "Mancherial", "Mandamarri", "Mudhole", "Narnoor", "Nennal", "Neradigonda", "Nirmal", "Rebbana", "Sarangapur", "Sirpur", "Talamadugu", "Tamsi", "Tandur", "Tanoor", "Tiryani", "Utnoor", "Vemanpalle", "Wankdi"],
    "Hyderabad": ["Amberpet", "Ameerpet", "Asifnagar", "Bahadurpura", "Bandlaguda", "Charminar", "Golconda", "Himayathnagar", "Khairatabad", "Maredpalle", "Musheerabad", "Nampally", "Saidabad", "Secunderabad", "Shaikpet", "Tirumalagiri"],
    "Karimnagar": ["Bejjanki", "Bheemadevarpalle", "Boinpalle", "Chandurthi", "Chigurumamidi", "Choppadandi", "Dharmapuri", "Dharmaram", "Elgaid", "Elkathurthi", "Ellanthakunta", "Gambhiraopet", "Gangadhara", "Gollapalle", "Husnabad", "Huzurabad", "Ibrahimpatnam", "Jagtial", "Jammikunta", "Julapalle", "Kamalapur", "Kamanpur", "Karimnagar", "Kataram", "Kathlapur", "Kodimial", "Koheda", "Konaraopeta", "Koratla", "Mahadevpur", "Malharrao", "Mallapur", "Mallial", "Manakondur", "Manthani", "Medipalle", "Metpalle", "Mustabad", "Mutharam", "Odela", "Peddapalle", "Pegadapalle", "Raikal", "Ramadugu", "Ramagundam", "Saidapur", "Sarangapur", "Shankarapatnam", "Sircilla", "Srirampur", "Sultanabad", "Timmapur", "Veenavanka", "Velgatoor", "Vemulawada", "Yellareddipet"],
    "Khammam": ["Aswapuram", "Aswaraopeta", "Bayyaram", "Bhadrachalam", "Bonakal", "Burgampahad", "Chandrugonda", "Cherla", "Chinthakani", "Chintur", "Dammapeta", "Dummugudem", "Enkuru", "Garla", "Gundala", "Julurpad", "Kallur", "Kamepalle", "Khammam Rural", "Khammam Urban", "Konijerla", "Kothagudem", "Kukunoor", "Kunavaram", "Kusumanchi", "Madhira", "Manuguru", "Mudigonda", "Mulkalapalle", "Nelakondapalle", "Palwancha", "Penuballi", "Pinapaka", "Sathupalle", "Singareni", "Tallada", "Tekulapalle", "Thirumalayapalem", "Vararamachandrapuram", "Velairpadu", "Vemsoor", "Venkatapuram", "Wazeed", "Wyra", "Yellandu", "Yerrupalem"],
    "Mahbubnagar": ["Achampet", "Addakal", "Alampur", "Amangal", "Amrabad", "Atmakur", "Balanagar", "Balmoor", "Bhoothpur", "Bijinapalle", "Bomraspet", "Chinnachintakunta", "Damaragidda", "Devarkadra", "Dhanwada", "Dharur", "Doulathabad", "Farooqnagar", "Gadwal", "Ghanpur", "Ghattu", "Gopalpeta", "Hanwada", "Ieej", "Itikyal", "Jadcherla", "Kalwakurthy", "Keshampet", "Kodair", "Kodangal", "Koilkonda", "Kollapur", "Kondurg", "Kosgi", "Kothakota", "Kothur", "Lingal", "Maddur", "Madgul", "Maganoor", "Mahbubnagar", "Makthal", "Maldakal", "Manopad", "Midjil", "Nagarkurnool", "Narayanpet", "Narva", "Nawabpet", "Pangal", "Pebbair", "Peddakothapalle", "Peddamandadi", "Tadoor", "Talakondapalle", "Telkapalle", "Thimmajipet", "Uppununthala", "Utkoor", "Vangoor", "Veepangandla", "Veldanda", "Waddepalle", "Wanaparthy"],
    "Medak": ["Alladurg", "Andole", "Chegunta", "Chinnakodur", "Doultabad", "Dubbak", "Gajwel", "Hathnoora", "Jagdevpur", "Jharasangam", "Jinnaram", "Kalher", "Kangti", "Kohir", "Kondapak", "Kondapur", "Kowdipalle", "Kulcharam", "Manoor", "Medak", "Mirdoddi", "Mulug", "Munpalle", "Nangnoor", "Narayankhed", "Narsapur", "Nyalkal", "Papannapet", "Patancheru", "Pulkal", "Raikode", "Ramachandrapuram", "Ramayampet", "Regode", "Sadasivpet", "Sangareddy", "Shankarampet", "Shivampet", "Siddipet", "Tekmal", "Thoguta", "Tupran", "Wargal", "Yeldurthy", "Zahirabad"],
    "Nalgonda": ["Alair", "Anumula", "Atmakur", "Bhongir", "Bibinagar", "Bommalaramaram", "Chandam Pet", "Chandur", "Chilkur", "Chintha Palle", "Chityala", "Chivvemla", "Choutuppal", "Dameracherla", "Devarakonda", "Garide Palle", "Gundala", "Gundla Palle", "Gurrampode", "Huzurnagar", "Jaji Reddi Gudem", "Kangal", "Kattangoor", "Kethe Palle", "Kodad", "M Turkapalle", "Marriguda", "Mattam Palle", "Mella Cheruvu", "Miryalaguda", "Mothey", "Mothkur", "Munagala", "Munugode", "Nadigudem", "Nakrekal", "Nalgonda", "Nampalle", "Narayanapur", "Narketpalle", "Neredcherla", "Nidamanur", "Nuthankal", "Pedda Adiserla Palle", "Peddavoora", "Penpahad", "Pochampalle", "Rajapet", "Ramannapeta", "Sali Gouraram", "Suryapet", "Thipparthi", "Thirumalgiri", "Thripuraram", "Thungathurthi", "Valigonda", "Vemulapalle", "Yadagirigutta"],
    "Nizamabad": ["Armur", "Balkonda", "Banswada", "Bheemgal", "Bhiknoor", "Bichkunda", "Birkoor", "Bodhan", "Dharpalle", "Dichpalle", "Domakonda", "Gandhari", "Jakranpalle", "Jukkal", "Kamareddy", "Kammarpalle", "Kotgiri", "Lingampet", "Machareddy", "Madnoor", "Makloor", "Mortad", "Nagareddipet", "Nandipet", "Navipet", "Nizamabad", "Nizamsagar", "Pitlam", "Ranjal", "Sadasivanagar", "Sirkonda", "Tadwai", "Varni", "Velpur", "Yedpalle", "Yellareddy"],
    "Rangareddy": ["Balanagar", "Bantwaram", "Basheerabad", "Chevella", "Dharur", "Doma", "Gandeed", "Ghatkesar", "Hayathnagar", "Ibrahimpatnam", "Kandukur", "Keesara", "Kulkacharla", "Maheswaram", "Malkajgiri", "Manchal", "Marpalle", "Medchal", "Moinabad", "Mominpet", "Nawabpet", "Pargi", "Peddemul", "Pudur", "Qutubullapur", "Rajendranagar", "Saroornagar", "Serilingampally", "Shabad", "Shamirpet", "Shamshabad", "Shankarpalle", "Tandur", "Uppal", "Vicarabad", "Yacharam", "Yelal"],
    "Warangal": ["Atmakur", "Bachannapet", "Bhupalpalle", "Chennaraopet", "Cherial", "Chityal", "Devaruppula", "Dharmasagar", "Dornakal", "Duggondi", "Eturnagaram", "Geesugonda", "Ghanpur", "Govindaraopet", "Gudur", "Hanamkonda", "Hasanparthy", "Jangaon", "Kesamudram", "Khanapur", "Kodakandla", "Kothagudem", "Kuravi", "Lingalaghanpur", "Maddur", "Mahabubabad", "Mangapet", "Maripeda", "Mogullapalle", "Mulug", "Nallabelly", "Narmetta", "Narsampet", "Narsimhulapet", "Nekkonda", "Nellikudur", "Palakurthi", "Parkal", "Parvathagiri", "Raghunathpalle", "Raiparthy", "Regonda", "Sangam", "Shayampet", "Tadvai", "Thorrur", "Venkatapur", "Warangal", "Wardhannapet", "Zaffergadh"],


    //Tripura
    "Dhalai": ["Ambassa", "Chhamanu", "Dumburnagar", "Manu", "Salema"],
    "North Tripura": ["Damchhara", "Dasda", "Gournagar", "Jampuii hills", "Kadamtala", "Kumarghat", "Panisagar", "Pencharthal"],
    "South Tripura": ["Amarpur", "Bokafa", "Hrishyamukh", "Kakraban", "Karbuk", "Killa", "Matarbari", "Ompi", "Rajnagar", "Rupaichhari", "Satchand"],
    "West Tripura": ["Bishalgarh", "Boxanagar", "Dukli", "Hezamara", "Jampuijala", "Jirania", "Kalyanpur", "Kathalia", "Khowai", "Mandai", "Melaghar", "Mohanpur", "Mungiakumi", "Padmabil", "Teliamura", "Tulashikhar"],


    //Tripura

    "Bageshwar": ["Garud", "Kanda", "Kapkot"], "Chamoli": ["Chamoli", "Gairsain", "Joshimath", "Karnaprayag", "Pokhari", "Tharali"], "Champawat": ["Champawat", "Lohaghat", "Pati", "Poornagiri"], "Dehradun": ["Chakrata", "Kalsi", "Tyuni", "Vikasnagar"], "Garhwal": ["Chaubattakhal", "Dhoomakot", "Lansdowne", "Pauri", "Satpuli", "Srinagar", "THALISAIN", "Yamkeshwar"],
    "Hardwar": ["Hardwar", "Roorkee"],
    "Nainital": ["Betalghat", "Dhari", "Kaladhungi", "Kosya Kutauli", "Lalkuan", "Nainital", "Ramnagar"], "Pithoragarh": ["Berinag", "Dharchula", "Didihat", "Gangolihat", "Munsiari"], "Rudraprayag": ["Jakholi", "Ukhimath"],
    "Tehri Garhwal": ["Devprayag", "Dhanaulti", "Ghansali", "Jakhnidhar", "Narendranagar", "Pratapnagar", "Tehri"], "Udham Singh Nagar": ["Bajpur", "Gadarpur", "Jaspur", "Kashipur", "Kichha", "Sitarganj"], "Uttarkashi": ["Bhatwari", "Chiniyalisaur", "Dunda", "Mori", "Puraula", "Rajgarhi"],






    //West Bangal

    "Bankura": ["Bankura I", "Bankura II", "Barjora", "Chhatna", "Gangajalghati", "Hirbandh", "Indpur", "Indus", "Jaypur", "Khatra", "Kotulpur", "Mejhia", "Onda", "Patrasayer", "Raipur", "Ranibundh", "Saltora", "Sarenga", "Simlapal", "Sonamukhi", "Taldangra", "Vishnupur"],
    "Barddhaman": ["Ausgram I", "Ausgram II", "Barabani", "Bhatar", "Burdwan I", "Burdwan II", "Faridpur Durgapur", "Galsi I", "Galsi II", "Jamalpur", "Jamuria", "Kalna I", "Kalna II", "Kanksa", "Katwa I", "Katwa II", "Ketugram I", "Ketugram II", "Khandaghosh", "Mangolkote", "Manteswar", "Memari I", "Memari II", "Ondal", "Pandabeswar", "Purbasthali I", "Purbasthali II", "Raina I", "Raina II", "Raniganj", "Salanpur"], "Birbhum": ["Bolpur Sriniketan", "Dubrajpur", "Illambazar", "Khoyrasol", "Labpur", "Mayureswar I", "Mayureswar II", "Mohammad Bazar", "Murarai I", "Murarai II", "Nalhati I", "Nalhati II", "Nanoor", "Rajnagar", "Rampurhat I", "Rampurhat II", "Sainthia", "Suri I", "Suri II"],
    "Dakshin Dinajpur": ["Balurghat", "Bansihari", "Gangarampur", "Harirampur", "Hilli", "Kumarganj", "Kushmundi", "Tapan"],
    "Darjiling": ["Darjeeling Pulbazar", "Gorubathan", "Jorebunglow Sukiapokhri", "Kalimpong I", "Kalimpong II", "Kharibari", "Kurseong", "Matigara", "Mirik", "Naxalbari", "Phansidewa", "Rangli Rangliot"], "Hawra": ["Amta I", "Amta II", "Bagnan I", "Bagnan II", "Bally Jagachha", "Domjur", "Jagatballavpur", "Panchla", "Sankrail", "Shyampur I", "Shyampur II", "Udaynarayanpur", "Uluberia I", "Uluberia II"],
    "Hugli": ["Arambag", "Balagarh", "Chanditala I", "Chanditala II", "Chinsurah Magra", "Dhaniakhali", "Goghat I", "Goghat II", "Haripal", "Jangipara", "Khanakul I", "Khanakul II", "Pandua", "Polba Dadpur", "Pursura", "Serampur Uttarpara", "Singur", "Tarakeswar"],
    "Jalpaiguri": ["Alipurduar I", "Alipurduar II", "Dhupguri", "Falakata", "Jalpaiguri", "Kalchini", "Kumargram", "Madarihat", "Mal", "Matiali", "Maynaguri", "Nagrakata", "Rajganj"],
    "Koch Bihar": ["Cooch Behar I", "Cooch Behar II", "Dinhata I", "Dinhata II", "Haldibari", "Mathabhanga I", "Mathabhanga II", "Mekliganj", "Sitai", "Sitalkuchi", "Tufanganj I", "Tufanganj II"], "Kolkata": ["Kolkata"], "Maldah": ["Bamangola", "Chanchal I", "Chanchal II", "English Bazar", "Gazole", "Habibpur", "Harischandrapur I", "Harischandrapur II", "Kaliachak I", "Kaliachak II", "Kaliachak III", "Maldah Old", "Manikchak", "Ratua I", "Ratua II"],
    "Murshidabad": ["Beldanga I", "Beldanga II", "Berhampore", "Bhagawangola I", "Bhagawangola II", "Bharatpur I", "Bharatpur II", "Burwan", "Domkal", "Farakka", "Hariharpara", "Jalangi", "Kandi", "Khargram", "Lalgola", "Murshidabad Jiaganj", "Nabagram", "Nawda", "Raghunathganj I", "Raghunathganj II", "Raninagar I", "Raninagar II", "Sagardighi", "Samserganj", "Suti I", "Suti II"], "Nadia": ["Chakdah", "Chapra", "Hanskhali", "Haringhata", "Kaliganj", "Karimpur I", "Karimpur II", "Krishnaganj", "Krishnagar I", "Krishnagar II", "Nabadwip", "Nakashipara", "Ranaghat I", "Ranaghat II", "Santipur", "Tehatta I", "Tehatta II"],
    "North Twenty Four Parganas": ["Amdanga", "Baduria", "Bagda", "Barasat I", "Barasat II", "Barrackpur I", "Barrackpur II", "Basirhat I", "Basirhat II", "Bongaon", "Deganga", "Gaighata", "Habra I", "Habra II", "Haroa", "Hasnabad", "Hingalganj", "Minakhan", "Rajarhat", "Sandeshkhali I", "Sandeshkhali II", "Swarupnagar"],
    "Paschim Medinipur": ["Binpur I", "Binpur II", "Chandrakona I", "Chandrakona II", "Dantan I", "Dantan II", "Daspur I", "Daspur II", "Debra", "Garbeta I", "Garbeta II", "Garbeta III", "Ghatal", "Gopiballavpur I", "Gopiballavpur II", "Jamboni", "Jhargram", "Keshiary", "Keshpur", "Kharagpur I", "Kharagpur II", "Midnapore", "Mohanpur", "Narayangarh", "Nayagram", "Pingla", "Sabang", "Salbani", "Sankrail"], "Purba Medinipur": ["Bhagawanpur I", "Bhagawanpur II", "Chandipur", "Contai I", "Contai III", "Deshopran", "Egra I", "Egra II", "Haldia", "Khejuri I", "Khejuri II", "Kolaghat", "Mahisadal", "Moyna", "Nanda Kumar", "Nandigram I", "Nandigram II", "Panskura", "Potashpur I", "Potashpur II", "Ramnagar I", "Ramnagar II", "Sahid Matangini", "Sutahata", "Tamluk"], "Puruliya": ["Arsha", "Bagmundi", "Balarampur", "Barabazar", "Bundwan", "Hura", "Jaipur", "Jhalda I", "Jhalda II", "Kashipur", "Manbazar I", "Manbazar II", "Neturia", "Para", "Puncha", "Purulia I", "Purulia II", "Raghunathpur I", "Raghunathpur II", "Santuri"],
    "South Twenty Four Parganas": ["Baruipur", "Basanti", "Bhangar I", "Bhangar II", "Bishnupur I", "Bishnupur II", "Budge Budge I", "Budge Budge II", "Canning I", "Canning II", "Diamond Harbour I", "Diamond Harbour II", "Falta", "Gosaba", "Jaynagar I", "Jaynagar II", "Kakdwip", "Kulpi", "Kultali", "Magrahat I", "Magrahat II", "Mandirbazar", "Mathurapur I", "Mathurapur II", "Namkhana", "Patharpratima", "Sagar", "Sonarpur", "Thakurpukur Mahestola"],
    "Uttar Dinajpur": ["Chopra", "Goalpokhar I", "Goalpokhar II", "Hemtabad", "Islampur", "Itahar", "Kaliaganj", "Karandighi", "Raiganj"]
    ,

    "Baksa": ["Baganpara", "Bajali", "Barama", "Barnagar", "Baska", "Ghograpar", "Goreswar", "Jalah", "Pathorighat", "Rangia", "Sarupeta", "Tamulpur", "Tihu"],
    "Barpeta": ["Baghbor", "Bajali", "Barnagar", "Barpeta", "Chenga", "Jalah", "Kalgachia", "Sarthebari", "Sarupeta"],
    "Bongaigaon": ["Bijni", "Boitamari", "Bongaigaon", "Sidli", "Srijangram"],
    "Cachar": ["Katigora", "Lakhipur", "Silchar", "Sonai", "Udarbond"],
    "Chirang": ["Barnagar", "Bengtol", "Bijni", "Bongaigaon", "Kokrajhar", "Sidli"],
    "Darrang": ["Dalgaon", "Kalaigaon", "Khoirabari", "Mangaldoi", "Pathorighat", "Sipajhar"],
    "Dhemaji": ["Dhakuakhana", "Dhemaji", "Gogamukh", "Jonai", "Sissibargaon", "Subansiri"],



    "Dhubri": ["Agamoni", "Bagribari", "Bilasipara", "Chapar", "Dhubri", "Golokganj", "Gossaigaon", "Mankachar", "South Salmara"],


    "Dibrugarh": ["Chabua", "Dibrugarh East", "Dibrugarh West", "Moran", "Naharkatiya", "Tengakhat", "Tingkhong"],


    "Dima Hasao": ["Haflong", "Mahur", "Maibong", "Umrangso"],


    "Goalpara": ["Balijana", "Dudhnai", "Lakhipur", "Matia", "Rangjuli"],



    "Golaghat": ["Bokakhat", "Dergaon", "Golaghat", "Khumtai", "Morangi", "Sarupathar"],



    "Hailakandi": ["Algapur", "Hailakandi", "Katlichara", "Lala"],


    "Jorhat": ["Jorhat East", "Jorhat West", "Majuli", "Mariani", "Teok", "Titabor"],


    "Kamrup": ["Boko", "Chamaria", "Chhaygaon", "Goreswar", "Goroimari", "Hajo", "Kamalpur", "Koya", "Nagarbera", "North Guwahati", "Palasbari", "Rangia"],



    "Kamrup Metropolitan": ["Azara", "Chandrapur", "Dispur", "Guwahati", "North Guwahati", "Sonapur"],


    "Karbi Anglong": ["Diphu", "Donka", "Phuloni", "Silonijan"],



    "Karimganj": ["Badarpur", "Karimganj", "Nilambazar", "Patharkandi", "Ramkrishna Nagar"],



    "Kokrajhar": ["Bagribari", "Bhowraguri", "Bilasipara", "Chapar", "Dhubri", "Dotoma", "Golokganj", "Gossaigaon", "Kokrajhar"],


    "Lakhimpur": ["Bihpuria", "Dhakuakhana", "Kadam", "Naobaicha", "Narayanpur", "North Lakhimpur", "Subansiri"],



    "Morigaon": ["Bhuragaon", "Laharighat", "Marigaon", "Mayong", "Mikirbheta"],



    "Nagaon": ["Dhing", "Doboka", "Hojai", "Kaliabor", "Kampur", "Lanka", "Nagaon", "Raha", "Rupahi", "Samaguri"],




    "Nalbari": ["Baganpara", "Banekuchi", "Barama", "Barbhag", "Barkhetri", "Ghograpar", "Nalbari", "Pachim Nalbari", "Tihu"],



    "Sivasagar": ["Amguri", "Dimow", "Mahmora", "Nazira", "Sibsagar", "Sonari"],



    "Sonitpur": ["Biswanath", "Chariduar", "Dhekiajuli", "Gohpur", "Helem", "Na Duar", "Tezpur"],



    "Tinsukia": ["Doom Dooma", "Margherita", "Sadiya", "Tinsukia"],



    "Udalguri": ["Dalgaon", "Dhekiajuli", "Harisinga", "Kalaigaon", "Khoirabari", "Mangaldoi", "Mazbat", "Pathorighat", "Udalguri"],
    "Anantapur": ["Agali", "Amadagur", "Amarapuram", "Anantapur", "Atmakur", "Bathalapalle", "Beluguppa", "Bommanahal", "Brahmasamudram", "Bukkapatnam", "Bukkaraya Samudram", "Chennekothapalle", "Chilamathur", "D Hirehal", "Dharmavaram", "Gandlapenta", "Garladinne", "Gooty", "Gorantla", "Gudibanda", "Gummagatta", "Guntakal", "Hindupur", "Kadiri", "Kalyandurg", "Kambadur", "Kanaganapalle", "Kanekal", "Kothacheruvu", "Kudair", "Kundurpi", "Lepakshi", "Madakasira", "Mudigubba", "Nallacheruvu", "Nallamada", "Nambulipulikunta", "Narpala", "Obuladevaracheruvu", "Pamidi", "Parigi", "Peddapappur", "Peddavadugur", "Penukonda", "Putlur", "Puttaparthi", "Ramagiri", "Raptadu", "Rayadurg", "Roddam", "Rolla", "Settur", "Singanamala", "Somandepalle", "Tadimarri", "Tadpatri", "Talupula", "Tanakal", "Uravakonda", "Vajrakarur", "Vidapanakal", "Yadiki", "Yellanur"],
    "Chittoor": ["B Kothakota", "Baireddipalle", "Bangarupalem", "Buchinaidu Kandriga", "Chandragiri", "Chinnagottigallu", "Chittoor", "Chowdepalle", "Gangadhara Nellore", "Gangavaram", "Gudipala", "Gudupalle", "Gurramkonda", "Irala", "K V B Puram", "Kalakada", "Kalikiri", "Kambhamvaripalle", "Karvetinagar", "Kuppam", "Kurabalakota", "Madanapalle", "Mulakalacheruvu", "Nagalapuram", "Nagari", "Narayanavanam", "Nimmanapalle", "Nindra", "Pakala", "Palamaner", "Palasamudram", "PeddaThippasamudram", "Peddamandyam", "Peddapanjani", "Penumuru", "Pichatur", "Pileru", "Pulicherla", "Punganur", "Puthalapattu", "Puttur", "Ramachandrapuram", "Ramakuppam", "Ramasamudram", "Renigunta", "Rompicherla", "Santhipuram", "Satyavedu", "Sodam", "Somala", "Srikalahasti", "Srirangarajapuram", "Thamballapalle", "Thavanampalle", "Thottambedu", "Tirupati Rural", "Tirupati Urban", "Vadamalapeta", "Valmikipuram", "Varadaiahpalem", "Vedurukuppam", "Venkatagirikota", "Vijayapuram", "Yadamarri", "Yerpedu", "Yerravaripalem"],
    "East Godavari": ["Addateegala", "Ainavilli", "Alamuru", "Allavaram", "Amalapuram", "Ambajipeta", "Anaparthy", "Atreyapuram", "Biccavolu", "Devipatnam", "Gandepalle", "Gangavaram", "Gokavaram", "Gollaprolu", "I Polavaram", "Jaggampeta", "Kadiam", "Kajuluru", "Kakinada Rural", "Kakinada Urban", "Kapileswarapuram", "Karapa", "Katrenikona", "Kirlampudi", "Korukonda", "Kotananduru", "Kothapalle", "Kothapeta", "Malikipuram", "Mamidikuduru", "Mandapeta", "Maredumilli", "Mummidivaram", "P Gannavaram", "Pamarru", "Pedapudi", "Peddapuram", "Pithapuram", "Prathipadu", "Rajahmundry", "Rajahmundry Rural", "Rajanagaram", "Rajavommangi", "Ramachandrapuram", "Rampachodavaram", "Rangampeta", "Ravulapalem", "Rayavaram", "Razole", "Rowthulapudi", "Sakhinetipalle", "Samalkota", "Sankhavaram", "Seethanagaram", "Thallarevu", "Thondangi", "Tuni", "Uppalaguptam", "Y Ramavaram", "Yeleswaram"], "Amaravathi": ["Amruthalur", "Atchampet", "Bapatla", "Bellamkonda", "Bhattiprolu", "Bollapalle", "Chebrolu", "Cherukupalle H O Arumbaka", "Dachepalle", "Duggirala", "Durgi", "Edlapadu", "Guntur", "Gurazala", "Ipur", "Kakumanu", "Karempudi", "Karlapalem", "Kollipara", "Kollur", "Krosuru", "Machavaram", "Macherla", "Mangalagiri", "Medikonduru", "Muppalla", "Nadendla", "Nagaram", "Narasaraopet", "Nekarikallu", "Nizampatnam", "Nuzendla", "Pedakakani", "Pedakurapadu", "Pedanandipadu", "Phirangipuram", "Piduguralla", "Pittalavanipalem", "Ponnur", "Prathipadu", "Rajupalem", "Rentachintala", "Repalle", "Rompicherla", "Sattenapalle", "Savalyapuram H O Kanamarlapudi", "Tadepalle", "Tadikonda", "Tenali", "Thullur", "Tsundur", "Vatticherukuru", "Veldurthi", "Vemuru", "Vinukonda"],
    "Krishna": ["A Konduru", "Agiripalle", "Avanigadda", "Bantumilli", "Bapulapadu", "Challapalle", "Chandarlapadu", "Chatrai", "G Konduru", "Gampalagudem", "Gannavaram", "Ghantasala", "Gudivada", "Gudlavalleru", "Guduru", "Ibrahimpatnam", "Jaggayyapeta", "Kaikalur", "Kalidindi", "Kanchikacherla", "Kankipadu", "Koduru", "Kruthivennu", "Machilipatnam", "Mandavalli", "Mopidevi", "Movva", "Mudinepalle", "Musunuru", "Mylavaram", "Nagayalanka", "Nandigama", "Nandivada", "Nuzvid", "Pamarru", "Pamidimukkala", "Pedana", "Pedaparupudi", "Penamaluru", "Penuganchiprolu", "Reddigudem", "Thotlavalluru", "Tiruvuru", "Unguturu", "Vatsavai", "Veerullapadu", "Vijayawada Rural", "Vijayawada Urban", "Vissannapet", "Vuyyuru", "Thullur", "Tsundur", "Vatticherukuru", "Veldurthi", "Vemuru", "Vinukonda"],
    "Kurnool": ["Adoni", "Allagadda", "Alur", "Aspari", "Atmakur", "Banaganapalle", "Bandi Atmakur", "Bethamcherla", "C Belagal", "Chagalamarri", "Chippagiri", "Devanakonda", "Dhone", "Dornipadu", "Gadivemula", "Gonegandla", "Gospadu", "Gudur", "Halaharvi", "Holagunda", "Jupadu Bungalow", "Kallur", "Kodumur", "Koilkuntla", "Kolimigundla", "Kosigi", "Kothapalle", "Kowthalam", "Krishnagiri", "Kurnool", "Maddikera", "Mahanandi", "Mantralayam", "Midthur", "Nandavaram", "Nandikotkur", "Nandyal", "Orvakal", "Owk", "Pagidyala", "Pamulapadu", "Panyam", "Pattikonda", "Peapally", "Pedda Kadubur", "Rudravaram", "Sanjamala", "Sirvel", "Srisailam", "Tuggali", "Uyyalawada", "Veldurthi", "Velgode", "Yemmiganur"],
    "Prakasam": ["Addanki", "Ardhaveedu", "Ballikurava", "Bestawaripeta", "Chandra Sekhara Puram", "Chimakurthi", "Chinaganjam", "Chirala", "Cumbum", "Darsi", "Donakonda", "Dornala", "Giddalur", "Gudluru", "Hanumanthuni Padu", "Inkollu", "Janakavarampanguluru", "Kandukur", "Kanigiri", "Karamchedu", "Komarolu", "Konakanamitla", "Kondapi", "Korisapadu", "Kotha Patnam", "Kurichedu", "Lingasamudram", "Maddipadu", "Markapur", "Marripudi", "Martur", "Mundlamuru", "Naguluppala Padu", "Ongole", "Pamur", "Parchur", "Peda Araveedu", "Pedacherlo Palle", "Podili", "Ponnaluru", "Pullalacheruvu", "Racherla", "Santhamaguluru", "Santhanuthala Padu", "Singarayakonda", "Tangutur", "Tarlupadu", "Thallur", "Tripuranthakam", "Ulavapadu", "Veligandla", "Vetapalem", "Voletivaripalem", "Yeddana Pudi", "Yerragondapalem", "Zarugumilli"], "Sri Potti Sriramulu Nellore": ["Allur", "Ananthasagaram", "Anumasamudrampeta", "Atmakur", "Balayapalle", "Bogole", "Buchireddipalem", "Chejerla", "Chillakur", "Chittamur", "Dagadarthi", "Dakkili", "Doravarisatram", "Duttalur", "Gudur", "Indukurpet", "Jaladanki", "Kaligiri", "Kaluvoya", "Kavali", "Kodavalur", "Kondapuram", "Kota", "Kovur", "Manubolu", "Marripadu", "Muthukur", "Naidupet", "Nellore", "Ojili", "Pellakur", "Podalakur", "Rapur", "Sangam", "Seetharamapuram", "Sullurpeta", "Sydapuram", "Tada", "Thotapalligudur", "Udayagiri", "Vakadu", "Varikuntapadu", "Venkatachalam", "Venkatagiri", "Vidavalur", "Vinjamur", "Tarlupadu", "Thallur", "Tripuranthakam", "Ulavapadu", "Veligandla", "Vetapalem", "Voletivaripalem", "Yeddana Pudi", "Yerragondapalem", "Zarugumilli"], "Srikakulam": ["Allur", "Ananthasagaram", "Anumasamudrampeta", "Atmakur", "Balayapalle", "Bogole", "Buchireddipalem", "Chejerla", "Chillakur", "Chittamur", "Dagadarthi", "Dakkili", "Doravarisatram", "Duttalur", "Gudur", "Indukurpet", "Jaladanki", "Kaligiri", "Kaluvoya", "Kavali", "Kodavalur", "Kondapuram", "Kota", "Kovur", "Manubolu", "Marripadu", "Muthukur", "Naidupet", "Nellore", "Ojili", "Pellakur", "Podalakur", "Rapur", "Sangam", "Seetharamapuram", "Sullurpeta", "Sydapuram", "Tada", "Thotapalligudur", "Udayagiri", "Vakadu", "Varikuntapadu", "Venkatachalam", "Venkatagiri", "Vidavalur", "Vinjamur"],
    "Visakhapatnam": ["Anakapalle", "Anandapuram", "Ananthagiri", "Araku Valley", "Atchutapuram", "Bheemunipatnam", "Butchayyapeta", "Cheedikada", "Chintapalle", "Chodavaram", "Devarapalle", "Dumbriguda", "G Madugula", "Gajuwaka", "Golugonda", "Gudem Kotha Veedhi", "Hukumpeta", "K Kotapadu", "Kasimkota", "Kotauratla", "Koyyuru", "Madugula", "Makavarapalem", "Munagapaka", "Munchingi Puttu", "Nakkapalle", "Narsipatnam", "Nathavaram", "Paderu", "Padmanabham", "Paravada", "Payakaraopeta", "Peda Bayalu", "Pedagantyada", "Pendurthi", "Rambilli", "Ravikamatham", "Rolugunta", "S Rayavaram", "Sabbavaram", "Visakhapatnam Rural", "Visakhapatnam Urban", "Yelamanchili"], "Vizianagaram": ["Badangi", "Balijipeta", "Bhogapuram", "Bobbili", "Bondapalle", "Cheepurupalle", "Dattirajeru", "Denkada", "Gajapathinagaram", "Gantyada", "Garividi", "Garugubilli", "Gummalakshmipuram", "Gurla", "Jami", "Jiyyammavalasa", "Komarada", "Kothavalasa", "Kurupam", "Lakkavarapukota", "Makkuva", "Mentada", "Merakamudidam", "Nellimarla", "Pachipenta", "Parvathipuram", "Pusapatirega", "Ramabhadrapuram", "Salur", "Seethanagaram", "Srungavarapukota", "Therlam", "Vepada", "Vizianagaram"], "West Godavari": ["Achanta", "Akividu", "Attili", "Bhimadole", "Bhimavaram", "Buttayagudem", "Chagallu", "Chintalapudi", "Denduluru", "Devarapalle", "Dwarakatirumala", "Eluru", "Ganapavaram", "Gopalapuram", "Iragavaram", "Jangareddigudem", "Jeelugu Milli", "Kalla", "Kamavarapukota", "Kovvur", "Koyyalagudem", "Lingapalem", "Mogalthur", "Nallajerla", "Narasapuram", "Nidadavole", "Nidamarru", "Palacoderu", "Palacole", "Pedapadu", "Pedavegi", "Pentapadu", "Penugonda", "Penumantra", "Peravali", "Poduru", "Polavaram", "T Narasapuram", "Tadepalligudem", "Tallapudi", "Tanuku", "Undi", "Undrajavaram", "Unguturu", "Veeravasaram", "Yelamanchili"],
    "Y S R": ["Atlur", "B Kodur", "Badvel", "Brahmamgarimattam", "Chakrayapet", "Chapad", "Chennur", "Chinnamandem", "Chinthakommadinne", "Chitvel", "Duvvur", "Galiveedu", "Gopavaram", "Jammalamadugu", "Kadapa", "Kalasapadu", "Kamalapuram", "Khajipet", "Kodur", "Kondapuram", "Lakkireddipalle", "Lingala", "Muddanur", "Mylavaram", "Nandalur", "Obulavaripalle", "Peddamudium", "Penagalur", "Pendlimarri", "Porumamilla", "Proddatur", "Pulivendla", "Pullampeta", "Rajampet", "Rajupalem", "Ramapuram", "Rayachoti", "S Mydukur", "Sambepalle", "Sidhout", "Simhadripuram", "Sri Avadhutha Kasinayana", "T Sundupalle", "Thondur", "Vallur", "Veeraballe", "Veerapunayunipalle", "Vempalle", "Vemula", "Vontimitta", "Yerraguntla"],
    "Araria": ["Araria", "Bhargama", "Forbesganj", "Jokihat", "Kursakatta", "Narpatganj", "Palasi", "Raniganj", "Sikti"],
    "Arwal": ["Arwal", "Kaler", "Karpi", "Kurtha", "Sonbhadra Banshi Suryapur"],
    // eslint-disable-next-line
    "Aurangabad": ["Aurangabad", "Barun", "Daudnagar", "Deo", "Goh", "Haspura", "Kutumba", "Madanpur", "Nabinagar", "Obra", "Rafiganj"],
    "Banka": ["Amarpur", "Banka", "Barahat", "Bausi", "Belhar", "Chanan", "Dhuraiya", "Katoria", "Phulidumar", "Rajaun", "Shambhuganj"],
    "Begusarai": ["Bachhwara", "Bakhri", "Balia", "Barauni", "Begusarai", "Bhagwanpur", "Birpur", "Cheria Bariarpur", "Chhorahi", "Dandari", "Garhpura", "Khudabandpur", "Mansurchak", "Matihani", "Naokothi", "Sahebpur Kamal", "Shamho Akha Kurha", "Teghra"],
    "Bhagalpur": ["Bihpur", "Colgong", "Gopalpur", "Goradih", "Ismailpur", "Jagdishpur", "Kharik", "Narayanpur", "Nathnagar", "Naugachhia", "Pirpainti", "Rangra Chowk", "Sabour", "Shahkund", "Sonhaula", "Sultanganj"],
    "Bhojpur": ["Agiaon", "Arrah", "Barhara", "Behea", "Charpokhari", "Garhani", "Jagdishpur", "Koilwar", "Piro", "Sahar", "Sandesh", "Shahpur", "Tarari", "Udwant Nagar"],
    "Buxar": ["Barhampur", "Buxar", "Chakki", "Chaugain", "Chausa", "Dumraon", "Itarhi", "Kesath", "Nawanagar", "Rajpur", "Simri"],
    "Darbhanga": ["Alinagar", "Bahadurpur", "Baheri", "Benipur", "Biraul", "Darbhanga", "Ghanshyampur", "Gora Bauram", "Hanumannagar", "Hayaghat", "Jale", "Keotiranway", "Kiratpur", "Kusheshwar Asthan", "Kusheshwar Asthan Purbi", "Manigachhi", "Singhwara", "Tardih"],
    "Gaya": ["Amas", "Atri", "Banke Bazar", "Barachatti", "Belaganj", "Bodh Gaya", "Dobhi", "Dumaria", "Fatehpur", "Gaya Town C D Block", "Guraru", "Gurua", "Imamganj", "Khizirsarai", "Konch", "Manpur", "Mohanpur", "Muhra", "Neem Chak Bathani", "Paraiya", "Sherghati", "Tan Kuppa", "Tikari", "Wazirganj"],
    "Gopalganj": ["Baikunthpur", "Barauli", "Bhorey", "Bijaipur", "Gopalganj", "Hathua", "Katiya", "Kuchaikote", "Manjha", "Pach Deuri", "Phulwaria", "Sidhwalia", "Thawe", "Uchkagaon"],
    "Jamui": ["Barhat", "Chakai", "Gidhaur", "Islamnagar Aliganj", "Jamui", "Jhajha", "Khaira", "Lakshmipur", "Sikandra", "Sono"],
    "Jehanabad": ["Ghoshi", "Hulasganj", "Jehanabad", "Kako", "Makhdumpur", "Modanganj", "Ratni Faridpur"],
    "Kaimur": ["Adhaura", "Bhabua", "Bhagwanpur", "Chainpur", "Chand", "Durgawati", "Kudra", "Mohania", "Nuaon"],
    "Katihar": ["Amdabad", "Azamnagar", "Balrampur", "Barari", "Barsoi", "Dandkhora", "Falka", "Hasanganj", "Kadwa", "Katihar", "Korha", "Kursela", "Manihari", "Mansahi", "Pranpur", "Sameli"],
    "Khagaria": ["Alauli", "Beldaur", "Chautham", "Gogri", "Khagaria", "Mansi", "Parbatta"],
    "Kishanganj": ["Bahadurganj", "Dighalbank", "Kishanganj", "Kochadhamin", "Pothia", "Terhagachh", "Thakurganj"],
    "Lakhisarai": ["Barahiya", "Chanan", "Halsi", "Lakhisarai", "Pipariya", "Ramgarh Chowk", "Surajgarha"],
    "Madhepura": ["Alamnagar", "Bihariganj", "Chausa", "Gamharia", "Ghailarh", "Gwalpara", "Kishanganj", "Kumarkhand", "Madhepura", "Murliganj", "Puraini", "Shankarpur", "Singheshwar"],
    "Madhubani": ["Andhratharhi", "Babubarhi", "Basopatti", "Benipatti", "Bisfi", "Ghoghardiha", "Harlakhi", "Jainagar", "Jhanjharpur", "Kaluahi", "Khajauli", "Ladania", "Lakhnaur", "Laukaha", "Laukahi", "Madhepur", "Madhubani", "Madhwapur", "Pandaul", "Phulparas", "Rajnagar"],

    "Munger": ["Asarganj", "Bariarpur", "Dharhara", "Jamalpur", "Kharagpur", "Munger", "Sangrampur", "Tarapur", "Tetiha Bambor"],
    "Muzaffarpur": ["Aurai", "Bandra", "Baruraj", "Bochaha", "Dholi", "Gaighat", "Kanti", "Katra", "Kurhani", "Marwan", "Minapur", "Musahri", "Paroo", "Sahebganj", "Sakra", "Saraiya"],
    "Nalanda": ["Asthawan", "Ben", "Bihar", "Bind", "Chandi", "Ekangarsarai", "Giriak", "Harnaut", "Hilsa", "Islampur", "Karai Parsurai", "Katrisarai", "Nagar Nausa", "Noorsarai", "Parbalpur", "Rahui", "Rajgir", "Sarmera", "Silao", "Tharthari"],
    "Nawada": ["Akbarpur", "Gobindpur", "Hisua", "Kashi Chak", "Kawakol", "Meskaur", "Nardiganj", "Narhat", "Nawada", "Pakribarawan", "Rajauli", "Roh", "Sirdala", "Warisaliganj"],
    "Pashchim Champaran": ["Bagaha", "Bairia", "Bettiah", "Bhitaha", "Chanpatia", "Gaunaha", "Jogapatti", "Lauriya", "Madhubani", "Mainatanr", "Majhaulia", "Narkatiaganj", "Nautan", "Piprasi", "Ramnagar", "Sidhaw", "Sikta", "Thakrahan"],
    "Patna": ["Athmalgola", "Bakhtiarpur", "Barh", "Belchhi", "Bihta", "Bikram", "Daniawan", "Dhanarua", "Dinapur Cum Khagaul", "Dulhin Bazar", "Fatwah", "Ghoswari", "Khusrupur", "Maner", "Masaurhi", "Mokameh", "Naubatpur", "Paliganj", "Pandarak", "Patna Rural", "Phulwari", "Punpun", "Sampatchak"],
    "Purba Champaran": ["Adapur", "Areraj", "Banjaria", "Bankatwa", "Chakia", "Chiraia", "Dhaka", "Ghorasahan", "Harsidhi", "Kalyanpur", "Kesaria", "Kotwa", "Madhuban", "Mehsi", "Motihari", "Narkatia", "Paharpur", "Pakri Dayal", "Patahi", "Phenhara", "Piprakothi", "Ramgarhwa", "Raxaul", "Sangrampur", "Sugauli", "Tetaria", "Turkaulia"],
    "Purnia": ["Amour", "Baisa", "Baisi", "Banmankhi", "Barhara", "Bhawanipur", "Dagarua", "Dhamdaha", "Jalalgarh", "Kasba", "Krityanand Nagar", "Purnia East", "Rupauli", "Srinagar"],
    "Rohtas": ["Akorhi Gola", "Bikramganj", "Chenari", "Dawath", "Dehri", "Dinara", "Karakat", "Kargahar", "Kochas", "Nasriganj", "Nauhatta", "Nokha", "Rajpur", "Rohtas", "Sanjhauli", "Sasaram", "Sheosagar", "Suryapura", "Tilouthu"],
    "Saharsa": ["Banma Itahri", "Kahara", "Mahishi", "Nauhatta", "Patarghat", "Salkhua", "Satar Kataiya", "Saur Bazar", "Simri Bakhtiarpur", "Sonbarsa"],
    "Samastipur": ["Bibhutpur", "Bithan", "Dalsinghsarai", "Hasanpur", "Kalyanpur", "Khanpur", "Mohanpur", "Mohiuddinagar", "Morwa", "Patori", "Pusa", "Rosera", "Samastipur", "Sarairanjan", "Shivaji Nagar", "Singhia", "Tajpur", "Ujiarpur", "Vidyapati Nagar", "Warisnagar"],
    "Saran": ["Amnour", "Baniapur", "Chapra", "Dariapur", "Dighwara", "Ekma", "Garkha", "Ishupur", "Jalalpur", "Lahladpur", "Maker", "Manjhi", "Marhaura", "Mashrakh", "Nagra", "Panapur", "Parsa", "Revelganj", "Sonepur", "Taraiya"],
    "Sheikhpura": ["Ariari", "Barbigha", "Chewara", "Ghat Kusumbha", "Sheikhpura", "Shekhopur Sarai"],
    "Sheohar": ["Dumri Katsari", "Piprarhi", "Purnahiya", "Sheohar", "Tariani Chowk"],
    "Sitamarhi": ["Bairgania", "Bajpatti", "Bathnaha", "Belsand", "Bokhara", "Charaut", "Dumra", "Majorganj", "Nanpur", "Parihar", "Parsauni", "Pupri", "Riga", "Runisaidpur", "Sonbarsa", "Suppi", "Sursand"],
    "Siwan": ["Andar", "Barharia", "Basantpur", "Bhagwanpur Hat", "Darauli", "Daraundha", "Goriakothi", "Guthani", "Hasanpura", "Hussainganj", "Lakri Nabiganj", "Maharajganj", "Mairwa", "Nautan", "Pachrukhi", "Raghunathpur", "Siswan", "Siwan", "Ziradei"],
    "Supaul": ["Basantpur", "Chhatapur", "Kishanpur", "Marauna", "Nirmali", "Pipra", "Pratapganj", "Raghopur", "Saraigarh Bhaptiyahi", "Supaul", "Tribeniganj"],
    "Vaishali": ["Bhagwanpur", "Bidupur", "Chehra Kalan", "Desri", "Goraul", "Hajipur", "Jandaha", "Lalganj", "Mahnar", "Mahua", "Patepur", "Paterhi Belsar", "Raghopur", "Raja Pakar", "Sahdai Buzurg", "Vaishali"],
    "Anjaw": ["Chaglagam", "Goiliang", "Hawai", "Hayuliang", "Kibithoo", "Manchal", "Metengliang", "Walong"],
    "Changlang": ["Bordumsa", "Changlang", "Diyun", "Jairampur", "Kharsang", "Khimiyong", "Lyngok Longtoi", "Manmao", "Miao", "Nampong", "Namtok", "Renuk", "Tikhak Rima Putok", "Vijoynagar", "Yatdam"],
    "Dibang Valley": ["Anelih", "Anini", "Etalin", "Kronli", "Mipi"],
    "East Kameng": ["Bameng", "Chayangtajo", "Dissing Passo", "Gyawe Purang", "Khenewa", "Lada", "Pakke Kessang", "Pipu Dipu", "Pizirang", "Richukrong", "Sawa", "Seijosa", "Seppa"],
    "East Siang": ["Bilat", "Boleng", "Kebang", "Kora", "Koyu", "Mebo", "Namsing", "Nari", "New Seren", "Pangin", "Pasighat", "Rebo Perging", "Riga", "Ruksin", "Sille Oyan"],
    "Kurung Kumey": ["Chambang", "Damin", "Gangte", "Koloriang", "Longding Koling", "Nyapin", "Palin", "Parsi Parlo", "Phassang", "Sangram", "Sarli", "Tali", "Tarak Lengdi", "Yangte"],
    "Lohit": ["Chongkham", "Lathao", "Lekang", "Namsai", "Piyong", "Sunpura", "Tezu", "Wakro"],
    "Lower Dibang Valley": ["Dambuk", "Desali", "Hunli", "Koronu", "Roing", "Tinali"],
    "Lower Subansiri": ["Dollungmukh", "Kamporijo", "Old Ziro", "Pistana", "Raga", "Yachuli", "Yazali", "Ziro"],
    "Papum Pare": ["Balijan", "Banderdawa", "Doimukh", "Gumto", "Itanagar", "Kakoi", "Kimin", "Leporiang", "Mengio", "Naharlagun", "Parang", "Sagalee", "Sangdupota", "Taraso", "Toru"],
    "Tawang": ["Bongkhar", "DUDUNGHAR", "Jang", "KITPI CIRCLE", "Lhou", "LUMLA", "MUKTO CIRCLE", "TAWANG CIRCLE", "Thingbu", "Zemithang"],
    "Tirap": ["Dadam", "Kanubari", "Khonsa", "Laju", "Lawnu", "Longding", "Namsang", "Pangchao", "Pumao", "Soha", "Wakka"],
    "Upper Siang": ["Geku", "Gelling", "Jengging", "Katan", "Mariyang", "Migging", "Mopom", "Palling", "Singa", "Tuting", "Yingkiong"],
    "Upper Subansiri": ["Baririjo", "Chetam", "Daporijo", "Dumporijo", "Giba", "Gite Ripa", "Gussar", "Limeking", "Maro", "Nacho", "Payeng", "Puchi Geko", "Siyum", "Taksing", "Taliha"],
    "West Kameng": ["Balemu", "Bhalukpong", "Bomdila", "Dirang", "Jamiri", "Kalaktang", "Kamengbari Doimara", "Nafra", "Rupa", "Shergaon", "Singchung", "Thembang", "Thrizino"],
    "West Siang": ["Aalo", "Bagra", "Basar", "Darak", "Daring", "Gensi", "Jomlo Mobuk", "Kamba", "Kangku", "Kaying", "Likabali", "Liromoba", "Mechuka", "Monigong", "Payum", "Pidi", "Rumgong", "Sibe", "Tato", "Tirbin", "Yomcha"]


}


const IndianDistrict = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],
    "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Itanagar"],
    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup (Rural)", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "Goa": ["North Goa", "South Goa"],
    "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jammu and Kashmir": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Vijayapura", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna",
        "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"],
    "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
    "Andaman and Nicobar Islands": ["Nicobar", "North Middle Andaman", "South Andaman"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli": ["Dadra Nagar Haveli"],
    "Daman and Diu": ["Daman", "Diu"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Lakshadweep": ["Lakshadweep"],
    "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
}


export { IndianDistrict, Blocks, IndianStates }