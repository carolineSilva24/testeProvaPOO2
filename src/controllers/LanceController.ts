import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceService";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.valor !== 0){
            const newlance = await LanceService.createLance(dados)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

        res.send('Create lance');
    }

    async listLance(req: Request, res: Response){
        const lances = LanceService.listLance();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })

        res.send('List lance');
    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController;
