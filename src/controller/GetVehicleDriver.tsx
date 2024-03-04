import { VehicleDriver } from "../models/VehicleDriver";

export async function getVehiclesAndDrivers(): Promise<VehicleDriver[]> {
  const response = await fetch("http://localhost:8082/bff/vehicles");
  const data = await response.json();

  const vehiclesAndDrivers: VehicleDriver[] = data.map(
    (vehicleDriver: VehicleDriver) => ({
      vehicle: vehicleDriver.vehicle,
      driver: vehicleDriver.driver,
    })
  );

  return vehiclesAndDrivers;
}
