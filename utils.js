export const formatNombreAvecEspaces = (value) => {
   const nombreSansCaracteresNonNumeriques = value.replace(/[^0-9]/g, '');
   const nombreAvecEspaces = nombreSansCaracteresNonNumeriques.replace(/(.{4})/g, '$1 ');
   return nombreAvecEspaces;
};