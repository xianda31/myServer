
import express, {NextFunction, Request,Response, Router,} from 'express';
import { openTournament} from './tournament_export_controller';

export const  set_excel_routes = (router : Router) => {

    router.get("/tournament",  (req : Request, res: Response, next:NextFunction) => {
        
        var fn : string =   req.query.fname as string;
        fn = './assets/'+ fn + '.csv' ;
        openTournament(fn)
        .then((t) => res.status(200).send(t) )
        .catch((err) => res.status(400).send(err));
      });

};

