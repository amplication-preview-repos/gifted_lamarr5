import { Module } from "@nestjs/common";
import { PairingAlgorithmService } from "./pairingalgorithm.service";
import { PairingAlgorithmController } from "./pairingalgorithm.controller";
import { PairingAlgorithmResolver } from "./pairingalgorithm.resolver";

@Module({
  controllers: [PairingAlgorithmController],
  providers: [PairingAlgorithmService, PairingAlgorithmResolver],
  exports: [PairingAlgorithmService],
})
export class PairingAlgorithmModule {}
