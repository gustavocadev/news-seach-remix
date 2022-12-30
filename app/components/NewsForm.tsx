import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useNewsContext from '../hooks/useNewsContext';

const CATEGORIAS = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Negocios' },
  { value: 'entertainment', label: 'Entretenimiento' },
  { value: 'health', label: 'Salud' },
  { value: 'science', label: 'Ciencia' },
  { value: 'sports', label: 'Deportes' },
  { value: 'technology', label: 'Tecnología' },
];
const NewsForm = () => {
  const { category, handleChangeCategory } = useNewsContext();

  return (
    <FormControl fullWidth>
      <InputLabel>Categoria</InputLabel>
      <Select
        label="Categoria"
        onChange={handleChangeCategory}
        value={category}
      >
        {CATEGORIAS.map((categoria) => (
          <MenuItem key={categoria.value} value={categoria.value}>
            {categoria.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default NewsForm;
