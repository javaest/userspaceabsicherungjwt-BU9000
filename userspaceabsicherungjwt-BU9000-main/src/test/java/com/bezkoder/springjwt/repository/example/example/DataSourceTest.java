package com.bezkoder.springjwt.repository.example.example;

import static org.assertj.core.api.Assertions.assertThat;

import javax.sql.DataSource;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DataSourceTest {

    @Autowired
    private DataSource dataSource;

    @Test
    public void testDataSource() throws Exception {
        assertThat(dataSource).isNotNull();
        assertThat(dataSource.getConnection()).isNotNull();
    }
}