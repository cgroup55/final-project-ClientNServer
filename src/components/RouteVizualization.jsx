import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from './Map';
import { readById } from '../tools/api.js';

const RouteVizualization = () => {
    const location = useLocation();
    const linenumber = location.state.line_code;
    const url = 'api/Transportation_Line/LineRouteInfo';

    const [routePoints, setRoutePoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRoutePoints = async () => {
            if (linenumber !== undefined) {
                try {
                    console.log("linenumber in useEffect", linenumber);
                    const res = await readById(url, 'linecod', linenumber);
                    console.log('res from db:', res);
                    if (res) {
                        console.log("points from server", res);
                        const points = res.map(point => ({
                            latitude: point.latitude,
                            longitude: point.longitude
                        }));
                        setRoutePoints(points);
                    } else {
                        console.error('No route points found for the given line number');
                    }
                } catch (error) {
                    console.error('Error fetching route points:', error);
                    setError('Error fetching route points');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchRoutePoints();
    }, [linenumber]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mt-5">
            <h3 className="bold" style={{ textAlign: 'center' }}>תצוגת מסלול אופטימלי </h3>
            <Map routePoints={routePoints} mode="route" />
        </div>
    );
};

export default RouteVizualization;
