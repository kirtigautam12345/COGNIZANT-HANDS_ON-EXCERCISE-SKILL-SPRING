package com.cognizant.get_country.service;

import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.get_country.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        List<Country> countryList =
                context.getBean("countryList", List.class);

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                context.close();
                return country;
            }
        }

        context.close();
        return null;
    }
}