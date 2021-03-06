package fi.tuni.TemporaryName.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

/**
 * Launches the spring application
 * @author Team TemporaryName - Ville Kautto
 * @version 2020-03-26
 * @since 2020-03-26
 */
@SpringBootApplication
public class WebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebappApplication.class, args);
	}
}
