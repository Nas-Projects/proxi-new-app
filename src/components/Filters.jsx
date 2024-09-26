// components/Filters.jsx

import  SelectButton  from './Select/SelectButton';
import { Input } from './ui/input';
import { Button } from '@medusajs/ui';

const Filters = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target || {}; // Use optional chaining to prevent errors
    if (name && value !== undefined) { // Ensure name and value are defined
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  return (
    <div className="filterSection">
      <SelectButton
        label="Location"
        name="location"
        items={["All Locations","Boston", "New York", "Los Angeles"]}
        handleInputChange={handleInputChange}
        value={filters.location}
      />
      <Input
        type="text"
        name="name"
        placeholder="Search by name"
        onChange={handleInputChange}
        value={filters.name}
      />
      <Input
        type="text"
        name="description"
        placeholder="Search by description"
        onChange={handleInputChange}
        value={filters.description}
      />
      <Input
        type="number"
        name="priceFrom"
        placeholder="Price from"
        onChange={handleInputChange}
        value={filters.priceFrom}
      />
      <Input
        type="number"
        name="priceTo"
        placeholder="Price to"
        onChange={handleInputChange}
        value={filters.priceTo}
      />
      <SelectButton
        label="Type"
        name="type"
        items={["All Types", "Retail", "Office", "forRent", "Investment Sale"]}
        handleInputChange={handleInputChange}
        value={filters.type}
      />
      <Button onClick={() => setFilters({})}>Clear Filters</Button>
    </div>
  );
};

export default Filters;
