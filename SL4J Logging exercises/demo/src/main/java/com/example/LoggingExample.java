package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        logger.warn("Application started.");

        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            logger.error("Division by zero error.", e);
        }

        logger.warn("Application finished.");
    }
}
