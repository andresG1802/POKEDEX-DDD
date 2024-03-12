-- CreateTable
CREATE TABLE "Pokemon" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "numeroPokedex" INTEGER NOT NULL,
    "tipoPrimario" TEXT NOT NULL,
    "tipoSecundario" TEXT,
    "descripcion" TEXT,
    "altura" DOUBLE PRECISION,
    "peso" DOUBLE PRECISION,
    "habilidadesEspeciales" TEXT,
    "evoluciones" TEXT,
    "hp" INTEGER,
    "ataque" INTEGER,
    "defensa" INTEGER,
    "velocidad" INTEGER,
    "imagenUrl" TEXT,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);
