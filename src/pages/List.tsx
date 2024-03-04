import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { VehicleDriver } from "../models/VehicleDriver";
import { getVehiclesAndDrivers } from "../controller/GetVehicleDriver";

const List = () => {
  const [vehiclesAndDrivers, setVehiclesAndDrivers] = useState<VehicleDriver[]>(
    []
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllVehicleDrivers = async () => {
      const allVehicleDriver = await getVehiclesAndDrivers();
      setVehiclesAndDrivers(allVehicleDriver);
    };
    getAllVehicleDrivers();
  }, []);

  const filtrarvehiclesAndDrivers = vehiclesAndDrivers
    ?.slice(0, 151)
    .filter((vehicleAndDriver) => {
      return (
        vehicleAndDriver.driver.firstName
          .toLowerCase()
          .match(query.toLowerCase()) ||
        vehicleAndDriver.driver.lastName
          .toLowerCase()
          .match(query.toLowerCase())
      );
    });

  return (
    <>
      <h1>Motoristas</h1>
      <header>
        <input
          value={query}
          placeholder="Buscar motorista"
          onChange={(event) => setQuery(event.target.value.trim())}
          type="text"
        />
      </header>
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {filtrarvehiclesAndDrivers
              ?.slice(0, 10)
              .map((vehicleAndDriver: VehicleDriver) => (
                <Card
                  className="mx-auto"
                  style={{ width: "18rem" }}
                  key={vehicleAndDriver.driver.id}
                >
                  <Card.Header>
                    <b>Nome:</b> {vehicleAndDriver.driver.firstName}{" "}
                    {vehicleAndDriver.driver.lastName}
                  </Card.Header>
                  <Card.Img
                    width="80"
                    height="200"
                    variant="top"
                    src="https://img.freepik.com/free-photo/business-man-car_1359-1314.jpg?w=900&t=st=1709490880~exp=1709491480~hmac=64e264c3fc5ccc485271aeda76efd8370af70dbef9b56ddc424a46919ab58702"
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      Detalhes do Veiculo
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Fabricante: {vehicleAndDriver.vehicle.brand}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Modelo: {vehicleAndDriver.vehicle.model}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Placa: {vehicleAndDriver.vehicle.licencePlate}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
