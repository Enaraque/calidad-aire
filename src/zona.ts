/**
 * Clase Zona.
 * Objeto valor que representa la zona.
 */
export class Zona {
    private privincia: string;
    private municipio: string;
    private estacion: string;

    /**
     * Constructor de la clase zona.
     * @param provincia Provincia de la zona.
     * @param municipio Municipio de la zona.
     * @param estacion Estación de la zona.
     */
    constructor(provincia: string, municipio: string, estacion: string) {
        this.privincia = provincia;
        this.municipio = municipio;
        this.estacion = estacion;
    }
}