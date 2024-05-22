FROM postgres:14

RUN mkdir -p /var/lib/postgresql/data

ENV POSTGRES_PASSWORD password
ENV POSTGRES_USER postgres

COPY --from=src . var/lib/postgres

VOLUME /var/lib/postgresql/data

ENTRYPOINT [ "docker-entrypoint.sh" ]