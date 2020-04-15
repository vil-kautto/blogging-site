package fi.tuni.TemporaryName.webapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

/**
 * Launches the spring application
 * @author Team TemporaryName - Ville Kautto
 * @version 2020.03.26
 * @since 2020.03.26
 */
@SpringBootApplication
public class WebappApplication {

	// Database for blog storing
	@Autowired
	BlogDatabase blogDatabase;

	// Adds 3 Blogs to the database upon creation, set false to disable
	private boolean includeTemplate = false;

	public static void main(String[] args) {
		SpringApplication.run(WebappApplication.class, args);
	}

	public void run(String... args) throws Exception {
		if(includeTemplate) {
			generateTemplate();
		}
	}

	/**
	 * GenerateTemplate generates 5 example blogs upon startup
	 * Can be controlled on by changing includeTemplate variable at the start of this file
	 */
	@PostConstruct
	public void generateTemplate() {
		System.out.println("Adding 3 sample entries to database");
		blogDatabase.save(new Blog("Example blog 1", "Sample text"));
		blogDatabase.save(new Blog("Example blog two", "Now with more text"));
		blogDatabase.save(new Blog("I am title", "I am text"));
	}
}
