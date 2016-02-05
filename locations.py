#!/usr/bin/env python

from geopy.geocoders import Nominatim
geolocator = Nominatim()
cities = ['Landon, SC, USA',
    'Victoria, Australia',
    'Tokyo, Japan',
    'Corona, CA',
    'Switzerland',
    'Gatika, Spain',
    'Lyon, France',
    'Wallerfangen, Germany',
    'Ballston Lake, NY, USA',
    'Athens, OH, USA',
    'Bethesda, MD, USA',
    'Beijing, China',
    'Oxford, United Kingdom',
    'Iowa City, IA, USA',
    'Berlin, Germany',
    'Gottingen, Germany',
    'Clifton Park, NY, USA',
    'Montreal, QC, Canada',
    'Iowa City, IA, USA',
    'Carrboro, NC, USA',
    'Durham, NC, USA',
    'Carrboro, NC, USA',
    'Carrboro, NC, USA',
    'Carrboro, NC, USA',
    'Carrboro, NC, USA',
    'Iowa City, IA, USA',
    'Chapel Hill, NC, USA',
    'Oxford, United Kingdom',
    'Chapel Hill, NC, USA',
    'Bonn, Germany',
    'Coralville, IA, USA',
    'Bangalore, India',
    'Vallegue, France',
    'Craiova, Dolj, Romania',
    'Carrboro, NC, USA',
    'London, United Kingdom',
    'Madrid, Spain',
    'Palmerston North, New Zealand',
    'Toulouse, France',
    'Clifton Park, NY, USA',
    'Clifton Park, NY, USA',
    'Clifton Park, NY, USA',
    'Clifton Park, NY, USA'
    ]
for city in cities:
    location = geolocator.geocode(city)
    print('  positions.push({x: ' + str(location.longitude) \
            + ', y: ' + str(location.latitude) + \
            '});')
