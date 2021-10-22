FROM golang:alpine as build
WORKDIR /go/src/app
COPY . .
RUN go build index.go

FROM scratch as final
WORKDIR /app
COPY --from=build /go/src/app/index .
ENTRYPOINT ["./index"]