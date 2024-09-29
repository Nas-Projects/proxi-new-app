import * as React from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

export default function CutomTable({ retail, office, investmentSale }) {
  const renderTableRows = (fields) => {
    return fields.map((field) => {
      const { name, title, value } = field;
      return (
        <TableRow key={name}>
          <TableCell>{title}</TableCell>
          <TableCell>{value ? value : "N/A"}</TableCell>
        </TableRow>
      );
    });
  };

  const getTableData = () => {
    if (retail) {
      return [
        { name: "address", title: "Address", value: retail.address },
        { name: "crossStreets", title: "Cross Streets", value: retail.crossStreets },
        { name: "neighborhood", title: "Neighborhood", value: retail.neighborhood },
        { name: "pricePerMonth", title: "Price Per Month", value: retail.pricePerMonth },
        { name: "priceAnnual", title: "Price Annual", value: retail.priceAnnual },
        { name: "size", title: "Size", value: retail.size },
        { name: "psf", title: "Price Per Square Foot", value: retail.psf },
        { name: "basement", title: "Basement", value: retail.basement ? "Yes" : "No" },
        { name: "frontage", title: "Frontage", value: retail.frontage },
        { name: "ceilingHeight", title: "Ceiling Height", value: retail.ceilingHeight },
        { name: "cookingAllowed", title: "Cooking Allowed", value: retail.cookingAllowed ? "Yes" : "No" },
        { name: "popUpAllowed", title: "Pop-Up Allowed", value: retail.popUpAllowed ? "Yes" : "No" },
        { name: "neighbors", title: "Neighbors", value: retail.neighbors?.join(", ") },
      ];
    } else if (office) {
      return [
        { name: "address", title: "Address", value: office.address },
        { name: "suite", title: "Suite", value: office.suite },
        { name: "crossStreets", title: "Cross Streets", value: office.crossStreets },
        { name: "neighborhood", title: "Neighborhood", value: office.neighborhood },
        { name: "priceMonthly", title: "Price Monthly", value: office.priceMonthly },
        { name: "priceYearly", title: "Price Yearly", value: office.priceYearly },
        { name: "size", title: "Size", value: office.size },
        { name: "psf", title: "Price Per Square Foot", value: office.psf },
        { name: "numberOfOffices", title: "Number of Offices", value: office.numberOfOffices },
        { name: "numberOfConferenceRooms", title: "Number of Conference Rooms", value: office.numberOfConferenceRooms },
        { name: "ceilingHeight", title: "Ceiling Height", value: office.ceilingHeight },
        { name: "kitchen", title: "Kitchen", value: office.kitchen ? "Yes" : "No" },
        { name: "bathrooms", title: "Bathrooms", value: office.bathrooms },
      ];
    } else if (investmentSale) {
      return [
        { name: "assetType", title: "Asset Type", value: investmentSale.assetType },
        { name: "portfolio", title: "Portfolio", value: investmentSale.portfolio ? "Yes" : "No" },
        { name: "sizeAvailable", title: "Size Available", value: investmentSale.sizeAvailable },
        { name: "price", title: "Price", value: investmentSale.price },
        { name: "psf", title: "Price Per Square Foot", value: investmentSale.psf },
        { name: "totalBuildingSize", title: "Total Building Size", value: investmentSale.totalBuildingSize },
        { name: "lotSize", title: "Lot Size", value: investmentSale.lotSize },
        { name: "buildingDimensions", title: "Building Dimensions", value: investmentSale.buildingDimensions },
        { name: "occupied", title: "Occupied", value: investmentSale.occupied ? "Yes" : "No" },
        { name: "floors", title: "Floors", value: investmentSale.floors },
        { name: "numberOfUnits", title: "Number of Units", value: investmentSale.numberOfUnits },
        { name: "grossIncome", title: "Gross Income", value: investmentSale.grossIncome },
        { name: "realEstateTax", title: "Real Estate Tax", value: investmentSale.realEstateTax },
        { name: "totalExpenses", title: "Total Expenses", value: investmentSale.totalExpenses },
        { name: "noi", title: "Net Operating Income", value: investmentSale.noi },
        { name: "capRate", title: "Capitalization Rate", value: investmentSale.capRate },
        { name: "zoning", title: "Zoning", value: investmentSale.zoning },
        { name: "loadingDock", title: "Loading Dock", value: investmentSale.loadingDock ? "Yes" : "No" },
      ];
    }
    return [];
  };

  const tableData = getTableData();

  return (
    <div className="w-full">
      <div className="w-full">
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell className="text-left text-xl font-bold sr-only">Additional Details</TableCell>
        <TableCell className="text-right text-xl font-bold sr-only">Details</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tableData.map((field) => (
        <TableRow key={field.name} className="group hover:bg-pink-100">
          <TableCell className="pl-2 text-left text-lg text-gray-700 font-bold group-hover:text-custom-gradient">{field.title}</TableCell>
          <TableCell className="text-right text-lg group-hover:text-custom-gradient">{field.value || "N/A"}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

      {/* <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="text-left flex text-xl mainText">Additional details</TableCell>
            <TableCell className="text-xl mainText sr-only">Details</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="text-left">{renderTableRows(tableData)}</TableBody>
      </Table> */}
    </div>
  );
}
