import { setIsSidebarCollapsed } from '@/state';
import { useAppDispatch, useAppSelector } from '../redux';

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  return { toggleSidebar, isSidebarCollapsed };
};
