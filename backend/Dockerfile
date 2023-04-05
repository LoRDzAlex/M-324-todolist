FROM maven:3.8.6-openjdk-18-slim AS build

COPY src /tmp/src
COPY pom.xml /tmp
RUN mvn -f /tmp/pom.xml clean package -DskipTests


FROM openjdk:18-jdk-alpine
COPY --from=build /tmp/target/*.jar demo.jar


EXPOSE 8080
ENTRYPOINT ["java", "-jar", "demo.jar"]
