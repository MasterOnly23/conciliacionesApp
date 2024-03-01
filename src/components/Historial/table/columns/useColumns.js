import { useMemo } from 'react';
import { ExtractoColumns, MayorColumns } from "./_columns";

export const useExtractoColumns = () => {
  const columns = useMemo(() => ExtractoColumns, []);
  return columns;
};

export const useMayorColumns = () => {
  const columns = useMemo(() => MayorColumns, []);
  return columns;
};