import { setIsDarkMode } from '@/state';
import { useAppDispatch, useAppSelector } from '../redux';

export const useDarkMode = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return { toggleDarkMode, isDarkMode };
};
